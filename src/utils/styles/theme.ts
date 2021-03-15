interface UnknownObject<T> {
  [key: string]: T;
}

export interface Theme {
  colors: UnknownObject<UnknownObject<string>>;
  fonts: UnknownObject<UnknownObject<string> | string>;
}

const theme: Theme = {
  colors: {
    white: {
      a: '#fff',
    },
    grey: {
      a: '#151c1b',
      b: '#f5f5f5',
    },
    blue: {
      a: '#396b7c',
    },
    black: {
      a: '#000',
      aRgb: '0, 0, 0',
    },
  },
  fonts: {
    work: "'Work Sans', sans-serif",
    weights: {
      bold: '700',
      semiBold: '500',
      normal: '400',
    },
  },
};

export default theme;
