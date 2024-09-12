export default function PdfViewer() {
  return (
    <div>
      <iframe
        src={`/${"Salma-Ghabri-Resume.pdf"}`}
        width="100%"
        height="600px"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}

PdfViewer;
