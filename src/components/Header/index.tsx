import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import React from 'react';

const cnApp = cn('App');
const cnHeader = cn('Header');

export const Header: React.SFC = () => (
    <RegistryConsumer>
        {(registries) => {
            // reading App registry
            const registry = registries[cnApp()];

            // taking desktop or mobile version
            const HeaderCommon = registry.get<any>(cnHeader());

            return <HeaderCommon />;
        }}
    </RegistryConsumer>
);
