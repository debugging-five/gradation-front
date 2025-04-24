import React from 'react';
import AlertOkButton from '../../components/button/AlertOkButton';
import AlertCancelButton from '../../components/button/AlertCancelButton';
import UncheckButton from '../../components/button/UncheckButton';
import CheckButton from '../../components/button/CheckButton';
import PrimaryButton from '../../components/button/PrimaryButton';
import SubButton from '../../components/button/SubButton';


const TestContainer = () => {
  return (
    <div>

      <div>
        <AlertOkButton>
          버튼
        </AlertOkButton>
      </div>

      <div>
        <AlertCancelButton>
          버튼
        </AlertCancelButton>
      </div>

      <div>
        <UncheckButton>
          버튼
        </UncheckButton>
      </div>

      <div>
        <CheckButton>
          버튼
        </CheckButton>
      </div>

      <div>
        <PrimaryButton>
          버튼
        </PrimaryButton>
      </div>

      <div>
        <SubButton>
          버튼
        </SubButton>
      </div>




    </div>
  );
};

export default TestContainer;