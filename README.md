<div align="center">
  <h1>PlcControlPanel</h1>
</div>

## Installing

1. Clone and install dependencies for mobile app

```bash
git clone https://github.com/VitekShuk/plc-control-panel.git
cd plc-control-panel/mobile
yarn install
```

2. Install dependencies for plc

- Download CoDeSys 2.3 https://owen.ru/product/codesys_v2 , only for windows os (CODESYS is the leading manufacturer-independent IEC 61131-3 automation software for engineering control systems)
- Install software
- Install target files for your plc (in this case it's ПЛК-100)
- Compile and download the program to a plc

## Develop

1. Develop Mobile App

```bash
cd plc-control-panel/mobile
yarn android
yarn ios
```

2. Develop plc program

- CoDeSys starts exactly like most Windows applications: Start-> Programs-> 3S Software -> CoDeSys V2.3 -> CoDeSys V2.3
- Open an existing project, for this you need to use the command File -> Open folder
- Getting started in the PLC_PRG editor window
