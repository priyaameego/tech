import React from 'react';
import { useConcept } from '../context/ConceptContext';
import { ConceptEnterprise } from '../components/concepts/ConceptEnterprise';
import { ConceptMinimal } from '../components/concepts/ConceptMinimal';
import { ConceptFuturistic } from '../components/concepts/ConceptFuturistic';
import { ConceptSAP } from '../components/concepts/ConceptSAP';
import { ConceptAgency } from '../components/concepts/ConceptAgency';

export const HomePage: React.FC = () => {
  const { currentConcept } = useConcept();

  switch (currentConcept) {
    case 'minimal':
      return <ConceptMinimal />;
    case 'futuristic':
      return <ConceptFuturistic />;
    case 'sap':
      return <ConceptSAP />;
    case 'agency':
      return <ConceptAgency />;
    case 'enterprise':
    default:
      return <ConceptEnterprise />;
  }
};

