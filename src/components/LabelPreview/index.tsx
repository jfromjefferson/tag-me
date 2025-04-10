import { CorreiosLabelData } from "../../types/CorreiosLabelData"
import Barcode from "react-barcode"
import styles from "./styles.module.scss"

interface Props {
  data: CorreiosLabelData
}

export function LabelPreview({ data }: Props) {
  return (
    <div className={styles.label_a5}>
      <div className={styles.header}>
        <h2>Etiqueta de Envio</h2>
        <span className={styles.service}>{data.service}</span>
      </div>

      {/* Top Barcode - Tracking Code */}
      <div>
        <Barcode value={data.trackingCode || "ABC1234567890BR"} format="CODE128" height={80} width={2} />
      </div>

      <div className={styles.block}>
        <strong>Destinatário:</strong>
        <p>{data.receiverName}</p>
        <p>{data.receiverAddress}</p>
        <p>{data.receiverDistrict}</p>
        <p>{data.receiverPostalCode} {data.receiverCity} - {data.receiverState}</p>
      </div>

      {/* Bottom Barcode - Postal Code */}
      <div>
        <Barcode value={data.receiverPostalCode || "00000000"} format="CODE128" height={60} width={1} displayValue={false} />
      </div>

      <div className={styles.block}>
        <strong>Remetente:</strong>
        <p>{data.senderName}</p>
        <p>{data.senderAddress}</p>
        <p>{data.senderDistrict}</p>
        <p>{data.senterPostalCode} {data.senderCity} - {data.senderState}</p>
      </div>

      {data.comments && (
        <div className={`${styles.block} ${styles.notes}`}>
          <strong>Observações:</strong>
          <p>{data.comments}</p>
        </div>
      )}
    </div>
  )
}
