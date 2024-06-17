import { ComponentPropsWithRef } from "react";

export const MailIcon = (
  props: ComponentPropsWithRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 261"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <title>Mailgun</title>
      <g>
        <path
          d="M126.142926,0.0477874502 C197.684555,0.0477874502 256,58.3632329 256,130.0251 C255.915282,145.192808 247.674876,159.141383 234.431001,166.53505 C221.187126,173.928718 204.98917,173.623363 192.033367,165.735795 L191.432177,165.375081 L191.191701,165.976272 C173.084029,198.800945 133.389353,213.034991 98.5489524,199.196874 C63.708552,185.358758 44.5979275,147.768075 53.9469824,111.464602 C63.2960372,75.1611294 98.1864455,51.4770672 135.377129,56.1887616 C172.567812,60.900456 200.449624,92.5371423 200.450029,130.0251 C201.11179,137.067512 207.02361,142.449853 214.097046,142.449853 C221.170482,142.449853 227.082301,137.067512 227.744062,130.0251 C227.744102,73.8928582 182.275128,28.3700751 126.142926,28.303725 C79.0601794,28.2189389 38.0721584,60.4562492 27.0598611,106.233115 C16.0475638,152.009982 37.8892285,199.361895 79.8591671,220.70004 C121.829106,242.038185 172.957811,231.785499 203.45598,195.915541 L225.098826,214.191722 C200.486858,243.327398 164.282622,260.131795 126.142926,260.122654 C55.8643207,257.985377 -1.3500312e-13,200.396315 -1.3500312e-13,130.085219 C-1.3500312e-13,59.7741229 55.8643207,2.18506075 126.142926,0.0477874502 L126.142926,0.0477874502 Z M126.142926,83.9739337 C109.106189,83.1262342 92.9900401,91.7408144 84.2302238,106.37757 C75.4704076,121.014326 75.4942329,139.288369 84.2921856,153.902234 C93.0901383,168.516098 109.228695,177.088625 126.263164,176.196504 C150.814122,174.910733 170.051824,154.612675 170.019811,130.028092 C169.987719,105.443508 150.697154,85.1956823 126.142926,83.9739337 L126.142926,83.9739337 Z M126.142926,111.388205 C136.435798,111.388205 144.77982,119.732227 144.77982,130.0251 C144.77982,140.317973 136.435798,148.661995 126.142926,148.661995 C115.850053,148.661995 107.506031,140.317973 107.506031,130.0251 C107.506031,119.732227 115.850053,111.388205 126.142926,111.388205 Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
};