import React from 'react';

import {
  KuiEmptyTablePrompt,
  KuiEmptyTablePromptPanel,
  KuiLinkButton,
  KuiButtonIcon,
} from '@kbn/ui-framework/components';

export function NoVisualizationsPrompt() {
  return (
    <KuiEmptyTablePromptPanel>
      <KuiEmptyTablePrompt
        actions={
          <KuiLinkButton
            href="#/visualize/new"
            buttonType="primary"
            icon={<KuiButtonIcon type="create"/>}
          >
            Crear una visualización
          </KuiLinkButton>
        }
        message="Parece que no tienes ninguna visualización. Vamos a crear algunas!"
      />
    </KuiEmptyTablePromptPanel>
  );
}
