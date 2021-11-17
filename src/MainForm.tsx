import { FormEventHandler, useState } from 'react';
import { v4 } from 'uuid';

export interface IMainFormProps {
  showSuccess: () => void;
  showFailure: () => void;
}

export const MainForm = ({ showFailure, showSuccess }: IMainFormProps) => {
  const [text1, setText1] = useState<string | undefined>(undefined);
  const [text2, setText2] = useState<string | undefined>(undefined);
  const [text3, setText3] = useState<string | undefined>(undefined);
  const [check1, setCheck1] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);
  const handleSubmit = () => {
    setProcessing(true);
    if (text1 === 'text 1 test data' && text2 === 'text 2 success data' && text3 === 'text 3 test data' && check1) {
      setTimeout(() => {
        showSuccess();
        setProcessing(false);
      }, 2000);
    } else if (
      text1 === 'text 1 test data' &&
      text2 === 'text 2 failure data' &&
      text3 === 'text 3 test data' &&
      check1
    ) {
      setTimeout(() => {
        showFailure();
        setProcessing(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setProcessing(false);
        alert('Form input not what it should be');
      });
    }
  };
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    handleSubmit();
    event.preventDefault();
  };
  return (
    <>
      {processing && <p>Processing your input, please wait...</p>}
      {!processing && (
        <form onSubmit={handleFormSubmit}>
          <p>Here is a rugged form!</p>
          <div>
            <label id={v4()} data-testid={'text-input-label-1'}>
              Label Text for Text Input 1
              <br />
              <input
                id={v4()}
                data-testid={'text-input-input-1'}
                value={text1}
                onChange={(e) => setText1(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label id={v4()}>
              Label Text for Text Input 2
              <br />
              <input id={v4()} value={text2} onChange={(e) => setText2(e.target.value)} />
            </label>
          </div>
          <div>
            <label id={v4()} data-testid={'text-input-label-3'}>
              Label Text for Text Input 3
              <br />
              <input
                id={v4()}
                data-testid={'text-input-input-3'}
                value={text3}
                onChange={(e) => setText3(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label id={v4()} data-testid={'checkbox-label'}>
              Label Text for Checkbox
              <br />
              <input
                id={v4()}
                data-testid={'checkbox-input'}
                type="checkbox"
                checked={check1}
                onChange={(e) => setCheck1(e.target.checked)}
              />
            </label>
          </div>
          <div>
            <label id={v4()}>
              Label for a submit <br />
              <button id={v4()} type="button" onClick={handleSubmit}>
                Submit
              </button>
            </label>
          </div>
        </form>
      )}
    </>
  );
};
