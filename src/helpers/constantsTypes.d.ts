
export interface IBoard {
  PWR_3V1?: number
  GPIO2?: number
  GPIO3?: number
  GPIO4?: number
  GND1?: number
  GPIO17?: number
  GPIO27?: number
  GPIO22?: number
  PWR_3V2?: number
  GPIO10?: number
  GPIO9?: number
  GPIO11?: number
  GND2?: number
  RESERVED1?: number
  GPIO5?: number
  GPIO6?: number
  GPIO13?: number
  GPIO19?: number
  GPIO26?: number
  GND3?: number
  PWR_5V1?: number
  PWR_5V2?: number
  GND4?: number
  TX?: number
  RX?: number
  GPIO18?: number
  GND5?: number
  GPIO23?: number
  GPIO24?: number
  GND6?: number
  GPIO25?: number
  GPIO8?: number
  GPIO7?: number
  RESERVED2?: number
  GND7?: number
  GPIO12?: number
  GND8?: number
  GPIO16?: number
  GPIO20?: number
  GPIO21?: number
}

export interface IGPIO {
  CAMERA_SENSOR_PIN: number
  METAL_SENSOR_PIN: number
  PLASTIC_SENSOR_PIN: number
  PAPER_SENSOR_PIN: number
  METAL_PWM_PIN: number
  PAPER_PWM_PIN: number
  PLASTIC_PWM_PIN: number
  CONVEYOR_PIN: number
  LED_STRIP_PIN: number
}
