import '../style/General.css'
import '../style/Main.css'
import FaqContents from '../Components/AccordionCompt'
import faqDatas from '../data/FaqData'
function Main() {

  const faqElements = faqDatas.map(data => {
    return(

      <FaqContents
        key={data.id}
        {...data}
      />
    )
  })
  return (
    <main className="main--container">
      <div className='Main--wrapper'>
        <div className="img--container">
         <img className='img-box' src="illustration-box-desktop.svg" alt="" />
        </div>
        <div className="faq--container">
          <h2 className='faq-head-title'>FAQ</h2>
          {faqElements}
        </div>
        </div>
    </main>
  )
}

export default Main