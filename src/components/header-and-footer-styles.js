/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';

export const HeaderAndFooterStyles = html`
	<style>
		/* **************************
                MOBILE HEADER
        **************************** */
		app-header {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			text-align: center;
			color: var(--app-header-text-color);
			z-index: 1000;
		}

		.toolbar-top {
			background-color: white;
		}

		[main-title] {
			padding-right: 44px;
			height: 100%;
		}

		[main-title] {
			pointer-events: auto;
		}

		[main-title] a svg {
			height: 100%;
			padding: 0.5em 0;
			box-sizing: border-box;
		}

		.menu-btn {
			background: none;
			border: none;
			fill: var(--app-header-text-color);
			cursor: pointer;
			height: 44px;
			width: 44px;
		}

		.drawer-list {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			padding: 24px;
			background: var(--app-drawer-background-color);
			position: relative;
		}

		.drawer-list a {
			display: block;
			text-decoration: none;
			color: var(--app-drawer-text-color);
			transition: all 200ms ease;
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 16px;
			font-weight: 600;
		}

		.drawer-list a[selected] {
			color: var(--app-drawer-selected-color);
		}

		/* ****************************
                    FOOTER
        ***************************** */
		footer {
			padding: 23px;
			background: var(--app-drawer-background-color);
			color: var(--app-tertiary-color);
			text-align: center;
			text-transform: uppercase;
			font-size: 9px;
			border-top: 2px solid var(--app-secondary-color);
			z-index: 3000;
			position: relative;
		}

		footer .copyright {
			margin-top: 16px;
			margin-bottom: 16px;
		}

		.affiliate-links {
			margin-top: 16px;
		}

		.footer-list a,
		.affiliate-links a {
			text-decoration: none;
			color: var(--app-tertiary-color);
			padding: 0 12px;
			transition: all 200ms ease;
		}

		.footer-list a:hover,
		.affiliate-links a:hover {
			color: var(--app-secondary-color);
			transition: all 200ms ease;
		}

		.social-links {
			margin-top: 16px;
			margin-bottom: 16px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.social-links div {
			width: 20px;
			height: auto;
			margin-right: 24px;
		}

		.social-links div:last-child {
			margin-right: 0;
		}

		.social-links div svg {
			fill: var(--app-tertiary-color);
			transition: all 200ms ease;
		}

		.social-links div svg:hover {
			fill: var(--app-secondary-color);
			transition: all 200ms ease;
		}
	</style>
`;
