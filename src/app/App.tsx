import { Column } from "../shared/ui/column/column"

function App() {

  return (
    <>
    <Column gap={5}>
      <div style={{
        width: 200,
        height: 44,
        backgroundColor: 'red'
      }}/>
      <div style={{
        width: 200,
        height: 44,
        backgroundColor: 'green'
      }}/>
      <div style={{
        width: 200,
        height: 44,
        backgroundColor: 'red'
      }}/>
      <div style={{
        width: 200,
        height: 44,
        backgroundColor: 'red'
      }}/>
    </Column>
    </>
  )
}

export default App

// - сделать компоненты Row, Column которые представляют из себя ряд и колонку,
// принимают children, gap (расстояние между элементами children в number) 
// и должны содержать еще дефолтные пропсы типа onClick, style, className и тд, разместить компоненты по FSD

// - сделать компонент Card с пропсами радиус углов, padding, children, разместить по FSD