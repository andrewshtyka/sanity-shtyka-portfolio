import {FieldProps} from 'sanity'

export function Divider(props: FieldProps) {
  const {title, renderDefault} = props

  return (
    <>
      <hr style={lineStyle} />
      <h2>{title}</h2>

      {renderDefault(props)}
    </>
  )
}

const lineStyle = {
  width: '100%',
  borderTop: '0.2rem solid #000',
  marginBlockStart: '2rem',
  marginBlockEnd: '-0.5rem',
}
