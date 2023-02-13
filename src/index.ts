import(
  /* webpackChunkName: "bootstrap" */ "bootstrap/dist/css/bootstrap.min.css"
);

let download: HTMLLinkElement = undefined;
let errorContainer: HTMLElement = undefined;
let errorContent: HTMLElement = undefined;
let spinner: HTMLElement = undefined;

document.addEventListener("readystatechange", () => {
  download = document.getElementById("download") as HTMLLinkElement;
  errorContainer = document.getElementById("errorContainer") as HTMLElement;
  errorContent = document.getElementById("errorContent") as HTMLElement;
  spinner = document.getElementById("spinner") as HTMLElement;

  const input = document.getElementById("fileInput") as HTMLInputElement;
  input.value = null;
  input.addEventListener("change", onChange);
});

async function onChange(event: Event): Promise<void> {
  download.classList.add("d-none");
  errorContainer.classList.add("d-none");

  const input = event.target as HTMLInputElement;
  if (input.files.length < 1) {
    return;
  }

  spinner.classList.remove("d-none");

  const file = input.files[0];
  let name = file.name;
  if (name.endsWith(".gpx")) {
    name = name.substring(0, file.name.length - 4);
  }

  const [arrayBuffer, gpxKmlConvert] = await Promise.all([
    file.arrayBuffer(),
    import(
      /* 
        webpackChunkName: "gpx_kml_convert",
        webpackPreload: true
      */
      "./gpx_kml_convert/gpx_kml_convert_wasm.js"
    ),
  ]);

  let kml: Uint8Array;
  try {
    kml = gpxKmlConvert.convert(new Uint8Array(arrayBuffer));
  } catch (e) {
    displayError(e);
    return;
  } finally {
    spinner.classList.add("d-none");
  }

  const reader = new FileReader();
  const url = (await new Promise((r) => {
    reader.onload = () => r(reader.result as string);
    reader.readAsDataURL(new Blob([kml]));
  })) as string;
  const base64 = url.replace(/^data:[^;]*;base64,/, "");

  download.href = "data:application/vnd.google-earth.kml+xml;base64," + base64;
  download.setAttribute("download", name + ".kml");
  download.classList.remove("d-none");
  download.click();
}

function displayError(err: Error): void {
  errorContent.textContent = err.message;
  errorContainer.classList.remove("d-none");
}
