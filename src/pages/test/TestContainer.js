import React from 'react';
import AlertOkButton from '../../components/button/AlertOkButton';
import AlertCancelButton from '../../components/button/AlertCancelButton';
import PrimaryButton from '../../components/button/PrimaryButton';
import SubButton from '../../components/button/SubButton';
import UncheckedButton from '../../components/button/UncheckedButton';
import CheckedButton from '../../components/button/CheckedButton';


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
        <UncheckedButton>
          버튼
        </UncheckedButton>
      </div>

      <div>
        <CheckedButton>
          버튼
        </CheckedButton>
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