const BOARD: IBoard = {
  PWR_3V1: 1,
  GPIO2: 3,
  GPIO3: 5,
  GPIO4: 7,
  GND1: 9,
  GPIO17: 11,
  GPIO27: 13,
  GPIO22: 15,
  PWR_3V2: 17,
  GPIO10: 19,
  GPIO9: 21,
  GPIO11: 23,
  GND2: 25,
  RESERVED1: 27,
  GPIO5: 29,
  GPIO6: 31,
  GPIO13: 33,
  GPIO19: 35,
  GPIO26: 37,
  GND3: 39,
  PWR_5V1: 2,
  PWR_5V2: 4,
  GND4: 6,
  TX: 8,
  RX: 10,
  GPIO18: 12,
  GND5: 14,
  GPIO23: 16,
  GPIO24: 18,
  GND6: 20,
  GPIO25: 22,
  GPIO8: 24,
  GPIO7: 26,
  RESERVED2: 28,
  GND7: 30,
  GPIO12: 32,
  GND8: 34,
  GPIO16: 36,
  GPIO20: 38,
  GPIO21: 40,
}

export const pins: IGPIO = {
  CAMERA_SENSOR_PIN: BOARD.GPIO20,
  METAL_SENSOR_PIN: BOARD.GPIO26,
  PLASTIC_SENSOR_PIN: BOARD.GPIO21,
  PAPER_SENSOR_PIN: BOARD.TX,
  METAL_PWM_PIN: BOARD.GPIO5,
  PAPER_PWM_PIN: BOARD.GPIO6,
  PLASTIC_PWM_PIN: BOARD.GPIO12,
  CONVEYOR_PIN: BOARD.GPIO16,
  LED_STRIP_PIN: BOARD.GPIO13,
}

interface IBoard {
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
