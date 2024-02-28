declare module '*.scss' {
    interface IClassNames {
      [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.css'
declare module '*[FTName].module.scss'

declare module '*.svg' {
  import type React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__ : boolean