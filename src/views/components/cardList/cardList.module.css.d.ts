declare namespace CardListModuleCssNamespace {
  export interface ICardListModuleCss {
    list: string;
  }
}

declare const CardListModuleCssModule: CardListModuleCssNamespace.ICardListModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CardListModuleCssNamespace.ICardListModuleCss;
};

export = CardListModuleCssModule;
