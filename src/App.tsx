import { useState, useRef } from "react";
import { CorreiosLabelForm } from "./components/LabelForm";
import { LabelPreview } from "./components/LabelPreview";
import { LabelGenerator } from "./components/LabelGenerator";
import { CorreiosLabelData } from "./types/CorreiosLabelData";

export default function App() {
  const [data, setData] = useState<CorreiosLabelData>({
    senderName: "Umbrella Corp",
    senderAddress: "Umbrella Street, 123",
    senderDistrict: "Central",
    senderCity: "Raccoon City",
    senderState: "PA",
    senterPostalCode: "123456-789",
    receiverName: "Alice",
    receiverAddress: "Arkham Street, 456",
    receiverDistrict: "Downtown",
    receiverCity: "Gotham",
    receiverState: "NY",
    receiverPostalCode: "123456-789",
    trackingCode: "ABC1234567890BR",
    service: "PAC",
    comments: "Abrir com cuidado",
  })


  const labelRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <h2>TagMe - Gerador de Etiquetas</h2>
      <CorreiosLabelForm data={data} setData={setData} />
      <div ref={labelRef}>
        <LabelPreview data={data} />
      </div>
      <LabelGenerator targetRef={labelRef} />
    </div>
  )
}
