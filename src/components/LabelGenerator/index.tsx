import { RefObject } from "react"

interface Props {
  targetRef: RefObject<HTMLDivElement | null>
}

export function LabelGenerator({ targetRef }: Props) {
  const handlePrint = () => {
    const printContents = targetRef.current?.innerHTML
    if (!printContents) return

    const win = window.open("", "", "")
    if (!win) return

    const doc = win.document
    const head = doc.head
    const body = doc.body

    // Get the stylesheets from the current document
    const styles = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join("\n")
        } catch (e) {
          console.warn("Could not access stylesheet:", styleSheet, e)
          return ""
        }
      }).join("\n")

    const title = doc.createElement("title")
    title.textContent = "Correios"
    head.appendChild(title)

    const style = doc.createElement("style")
    style.textContent = styles
    head.appendChild(style)

    body.innerHTML = printContents

    // Trigger print and close the window after printing
    win.focus()
    win.print()
    win.close()
  }

  return (
    <div className="label-generator">
      <button onClick={handlePrint}>Imprimir Etiqueta</button>
    </div>
  )
}
