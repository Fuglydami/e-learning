import React, { useEffect, useState, useRef } from 'react';

import { Container, MainContainer, Title } from '../../misc/component-wrapper';

import CustomButton from '../../shared/custom-button';
import { PRINT_TECH_FEE } from '../../services/api-url';
import { gethttp } from '../../services/actions';
import { saveByteArray } from '../../shared/shared';

const PaymentTechReceipt = () => {
  const [loading, setLoading] = useState(false);
  const handlePrintReceipt = async () => {
    setLoading(true);

    const data = await gethttp(PRINT_TECH_FEE, 'application/pdf', 'download');
    if (data && data.status === 200) {
      saveByteArray('Technology Fee Receipt.pdf', data.data);

      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <Container>
        <Title title={'Print Technology Fee Receipt'} />

        <div className='mt-6'>
          <CustomButton
            loading={loading}
            disabled={loading}
            title={'Print Receipt'}
            onClick={handlePrintReceipt}
            buttonStyle={'bg-base_range white w-full'}
          />
        </div>
      </Container>
    </MainContainer>
  );
};

export default PaymentTechReceipt;
