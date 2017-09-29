import React, { Component } from 'react';
import { Container, TitleBar } from '@extjs/ext-react';
import Home from './Home/Home';

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');

/**
 * The main application view and routes
 */
export default function App() {
    return (
        <Container fullscreen layout="fit">
            <TitleBar title="ExtReact Boilerplate" docked="top"/> 
            <Home/>
        </Container>
    );
}