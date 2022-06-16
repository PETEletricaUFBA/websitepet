import NextImage from "next/image";

// opt-out of image optimization, no-op
function customLoader({ src }: { src: String; }): String {
  return src;
}

export default function Image(props : any): JSX.Element {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}