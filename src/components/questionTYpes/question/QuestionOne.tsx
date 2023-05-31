import cross from '../../navImages/x-circle-fill.svg'
import InputQuestion from './InputQuestion'

function QuestionOne() {

const options = ['Option 1', 'Option 2']

  return (
    <>
      <InputQuestion />
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          width: '700px',
          gap: '30px',          
      }}
         className='my-5'
      >
      {options.map((option, index) => (
                <div key={index}>
                    <p className='m-1'>Option {index + 1}</p>
                    <div className='d-flex'>
                        <input
                        style={{outline: '2px solid yellow', border: 'none', fontSize: '20px' }}
                        type="text"
                        className="card py-3 mr-5 px-3 "
                        value={option}
                        />
                        <img src={cross} alt="" style={{width: '30px'}} />
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default QuestionOne