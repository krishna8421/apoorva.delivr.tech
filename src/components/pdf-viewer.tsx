"use client";

import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const resizeObserverOptions = {};

const options = {
  //   cMapUrl: "/cmaps/",
  //   standardFontDataUrl: "/standard_fonts/",
};

const maxWidth = 768;

interface IProps {
  pdfFile: string;
}

const PdfViewer = ({ pdfFile }: IProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    if (entry) setContainerWidth(entry.contentRect.width);
  }, []);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  return (
    <div className="p-4" ref={setContainerRef}>
      <Document
        file={`${pdfFile}`}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        className="flex flex-col items-center gap-6"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={
              containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
            }
            className="rounded-lg overflow-hidden"
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
