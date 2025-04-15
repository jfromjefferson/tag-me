import React from "react"
import { CorreiosLabelData } from "../../types/CorreiosLabelData"
import { faker } from "@faker-js/faker"

interface Props {
  data: CorreiosLabelData
  setData: React.Dispatch<React.SetStateAction<CorreiosLabelData>>
}

export function CorreiosLabelForm({ data, setData }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  function generateTrackingCode() {
    const numbers = faker.string.numeric({ length: 11 })
    return `AB${numbers}BR`
  }

  function randomizeData() {
    const randomNames = [faker.person.fullName(), faker.person.fullName()]
    const randomAddresses = [faker.location.streetAddress(true), faker.location.streetAddress(true)]
    const randomDistricts = [faker.location.country(), faker.location.country()]
    const randomCities = [faker.location.city(), faker.location.city()]
    const randomStates = [faker.location.state(), faker.location.state()]
    const randomPostalCodes = [faker.location.zipCode({format: "#####-###"}), faker.location.zipCode({format: "#####-###"})]
    const randomTrackingCode = generateTrackingCode()
    const randomServices = ["PAC", "SEDEX", "SEDEX 10", "SEDEX Hoje", "PAC com coleta", "SEDEX com coleta"]
    const randomComments = ["Abrir com cuidado", "Frágil", "Não dobrar", "Entregar pessoalmente", "Deixar na portaria"]

    setData((prev) => ({
      ...prev,
      senderName: randomNames[0],
      senderAddress: randomAddresses[0],
      senderDistrict: randomDistricts[0],
      senderCity: randomCities[0],
      senderState: randomStates[0],
      senderPostalCode: randomPostalCodes[0],
      receiverName: randomNames[1],
      receiverAddress: randomAddresses[1],
      receiverDistrict: randomDistricts[1],
      receiverCity: randomCities[1],
      receiverState: randomStates[1],
      receiverPostalCode: randomPostalCodes[1],
      trackingCode: randomTrackingCode,
      service: randomServices[Math.floor(Math.random() * randomServices.length)],
      comments: randomComments[Math.floor(Math.random() * randomComments.length)],
    }))
  }

  return (
    <form className="label-form">
      <div className="label-form-header">
        <span></span>
        <button className="random-data-btn" type="button" onClick={randomizeData}>Gerar dados</button>
      </div>
      <h2>Remetente</h2>
      <input name="senderName" value={data.senderName} onChange={handleChange} placeholder="Nome do remetente" />
      <input name="senderAddress" value={data.senderAddress} onChange={handleChange} placeholder="Endereço do remetente" />
      <input name="senderPostalCode" value={data.senderPostalCode} onChange={handleChange} placeholder="CEP do remetente" />

      <h2>Destinatário</h2>
      <input name="receiverName" value={data.receiverName} onChange={handleChange} placeholder="Nome do destinatário" />
      <input name="receiverAddress" value={data.receiverAddress} onChange={handleChange} placeholder="Endereço do destinatário" />
      <input name="receiverPostalCode" value={data.receiverPostalCode} onChange={handleChange} placeholder="CEP do destinatário" />

      <h2>Dados do Envio</h2>
      <input name="trackingCode" value={data.trackingCode} onChange={handleChange} placeholder="Código de rastreamento" maxLength={15} />
      <input name="service" value={data.service} onChange={handleChange} placeholder="Serviço (PAC, SEDEX...)" />
      <textarea name="comments" value={data.comments} onChange={handleChange} placeholder="Observações" />
    </form>
  )
}