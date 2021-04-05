declare namespace GridModuleCssNamespace {
  export interface IGridModuleCss {
    column: string;
    grid: string;
  }
}

declare const GridModuleCssModule: GridModuleCssNamespace.IGridModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GridModuleCssNamespace.IGridModuleCss;
};

export = GridModuleCssModule;
