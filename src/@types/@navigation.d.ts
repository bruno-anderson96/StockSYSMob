export interface ProdParams {
  nome: string;
  EAN13: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      camera: undefined;
      produtos: ProdParams;
    }
  }
}
