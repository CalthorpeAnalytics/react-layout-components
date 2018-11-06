import * as React from 'react';
import { CSSProperties, HTMLAttributes } from 'react';

type alignProps = Pick<CSSProperties, 'order' | 'justifyContent' | 'alignItems' | 'alignSelf' | 'alignContent'>;

type sizeProps = Pick<CSSProperties, 'width' | 'minWidth' | 'maxWidth' | 'height' | 'minHeight' | 'maxHeight'>

type boxProps = alignProps & sizeProps;

type flexProps = Pick<CSSProperties, 'flex' | 'flexGrow' | 'flexShrink' | 'flexBasis'>;

interface flexLayoutProps {
  column: boolean;
  row: boolean;
  wrap: boolean;
  flow: boolean;

  inline: boolean;
  center: boolean;
  fit: boolean;
}

type layoutProps = boxProps & flexProps & flexLayoutProps;

type paddingProps = Pick<CSSProperties, 'padding' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingBottom'>;
type marginProps = Pick<CSSProperties, 'margin' | 'marginLeft' | 'marginRight' | 'marginTop' | 'marginBottom'>;

type borderProps = Pick<CSSProperties, 'border' | 'borderWidth' | 'borderColor' | 'borderStyle' | 'borderLeft' | 'borderRight' | 'borderTop' | 'borderBottom'>;

type positionProps = Pick<CSSProperties, 'top' | 'left' | 'bottom' | 'right'>;
type overflowProps = Pick<CSSProperties, 'overflow' | 'overflowX' | 'overflowY' | 'textOverflow' | 'whiteSpace'>;
type containerProps = Pick<CSSProperties, 'boxSizing'> | paddingProps | marginProps | borderProps | positionProps | overflowProps;
type borderShortcutProps = Pick<CSSProperties, 'borderTop' | 'borderWidth' | 'borderRight' | 'borderLeft'>;

type elementProps = Pick<HTMLAttributes<HTMLDListElement>, 'className' | 'style'>;
export declare class Box extends React.Component<boxProps & flexProps & elementProps> {}

export declare class ScrollView extends React.Component<boxProps & flexProps & overflowProps & elementProps> {}
