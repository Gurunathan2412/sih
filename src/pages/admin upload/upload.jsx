import { useState, useRef } from "react";
import { fileUpload } from "./blobupload"

// Filepond Plugin imports
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFilePreview from "filepond-plugin-pdf-preview";

// FilePond styles
import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.css"
// Register the plugins for usage
registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileEncode,
  FilePondPluginFilePreview
);

function Upload() {
  const [pdfFile, setpdfFile] = useState([]);

  const filePondPdfRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const containerName = "powergptdocs";

    const fileString = await fileUpload(pdfFile, containerName);
    console.log("url string:", fileString);
  };

  return (
    <main
      style={{
        width: "50%",
        margin: "auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        Knowledge Base
      </h1>

      <form method="post" onSubmit={handleSubmit}>
        <FilePond
          fileSizeBase={100000}
          checkValidity={true}
          allowFileTypeValidation={true}
          allowFileSizeValidation={true}
          allowFileEncode={true}
          chunkUploads={true}
          acceptedFileTypes={["application/pdf"]}
          files={pdfFile}
          onupdatefiles={setpdfFile}
          allowMultiple={false}
          maxFiles={1}
          name="files"
          ref={filePondPdfRef}
          onaddfile={(error, fileItem) => {
            if (error) {
              console.log(error);
            }

            if (fileItem.file.size > 10000000) {
              console.error("File size is too large");
            }
          }}
          oninit={() => console.log("FilePond instance has initialised")}
          labelIdle='Drag &amp; Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        <button
          type="submit"
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#225BD8",
            color: "white",
            border: "none",
            borderRadius: "8px",
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          Submit for file
        </button>
      </form>
    </main>
  );
}

export default Upload;
