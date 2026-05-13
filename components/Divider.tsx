import {FieldProps} from 'sanity'

export function Divider(props: FieldProps) {
  const {title, renderDefault} = props

  return (
    <>
      <hr style={lineStyle} />
      <h2 style={titleStyle}>{title}</h2>

      {renderDefault(props)}
    </>
  )
}

const lineStyle = {
  width: '100%',
  borderTop: '0.2rem solid #000',
  marginBlockStart: '3rem',
  marginBlockEnd: '-0.5rem',
}

const titleStyle = {
  fontSize: '2rem',
  marginBlockStart: '1.5rem',
  marginBlockEnd: '2rem',
}
