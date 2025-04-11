export interface CorreiosLabelData {
  senderName: string;
  senderAddress: string;
  senderDistrict: string;
  senderCity: string;
  senderState: string;
  senderPostalCode: string;
  receiverName: string;
  receiverAddress: string;
  receiverDistrict: string;
  receiverCity: string;
  receiverState: string;
  receiverPostalCode: string;
  trackingCode: string;
  service: string;
  comments?: string;
}
