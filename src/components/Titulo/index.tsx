import { Titulo as TituloEstilo } from './styles'

type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
