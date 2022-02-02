import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="faqs-card-container">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(eachFaqs => (
            <FaqItem key={eachFaqs.id} faqsDetails={eachFaqs} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
