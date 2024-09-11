const PdfViewer = () => {
  return (
    <div>
      <iframe
        // src={`${process.env.PUBLIC_URL}/ile.pdf`}
        width="100%"
        height="600px"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default PdfViewer;
