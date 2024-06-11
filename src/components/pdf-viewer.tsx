"use client";

import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import { cn } from "@/lib/utils";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { CircularProgress } from "@nextui-org/react";

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
  twoPageLayout?: boolean;
}

const PdfViewer = ({ pdfFile, twoPageLayout = false }: IProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    if (entry) setContainerWidth(entry.contentRect.width);
  }, []);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    // setIsLoading(false);
    setNumPages(nextNumPages);
  }

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  return (
    <div className="p-4" ref={setContainerRef}>
      {/* {isLoading && (
        <div className="flex justify-center items-center">
          <CircularProgress color="secondary" aria-label="Loading..." />
        </div>
      )} */}

      <Document
        file={`${pdfFile}`}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        className={cn(
          "grid grid-cols-1 items-center gap-6",
          twoPageLayout && "md:grid-cols-2"
        )}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={
              twoPageLayout
                ? containerWidth
                  // -24px because of gap-6
                  ? Math.min((containerWidth - 24) / 2, (maxWidth - 24) / 2)
                  : maxWidth - 24
                : containerWidth
                ? Math.min(containerWidth, maxWidth)
                : maxWidth
            }
            className="rounded-lg overflow-hidden"
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
