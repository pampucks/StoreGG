import React from 'react';

interface InfoFooterProps {
    title: string,
    info1: string,
    info2: string,
    info3: string,
    info4?: string,
    href1?: string,
    href2?: string,
    href3?: string,
    href4?: string
}
export default function InfoFooter(props: Partial<InfoFooterProps>) {
  const {
    title, info1, info2, info3, info4, href1, href2, href3, href4,
  } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <a href={href1} className="text-lg color-palette-1 text-decoration-none">{info1}</a>
        </li>
        <li className="mb-6">
          <a href={href2} className="text-lg color-palette-1 text-decoration-none">
            {info2}
          </a>
        </li>
        <li className="mb-6">
          <a href={href3} className="text-lg color-palette-1 text-decoration-none">{info3}</a>
        </li>
        <li className="mb-6">
          <a href={href4} className="text-lg color-palette-1 text-decoration-none">
            {info4}
          </a>
        </li>
      </ul>
    </div>
  );
}
