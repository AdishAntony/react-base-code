/* eslint-disable react/prop-types */
import React, { Suspense, Fragment, lazy } from 'react';
import { Route } from 'react-router-dom';

import { Switch } from 'react-router-dom';
// import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';

// import Market from '../components/market/';
// import MarketDetails from '../components/market/details';
// import Mandi from '../components/mandi/';
// import MandiDetails from '../components/mandi/details';
// import Account from '../components/account';
// import PersonalInfo from '../components/account/personalInfo';
// import CompanyInfo from '../components/account/companyInfo';
// import Wishlist from '../components/account/wishlist';
// import MyCommodities from '../components/account/myCommodities';
// import PostRequirement from '../components/postRequirement';
// import Category from '../components/category/';
// import CategoryDetails from '../components/category/details';
// import PrivacyPolicy from '../components/privacy/';
// import TermsConditions from '../components/terms/';
// import Contact from '../components/contact/';
// import About from '../components/about/';
// import WhatWeDo from '../components/whatWeDo/';
import NotFound from '../components/common/NotFound';

// Layout
const Header = lazy(() => import('../components/layout/header/'));
// const Sidebar = lazy(() => import('../components/layout/sidebar/'));
const Footer = lazy(() => import('../components/layout/footer/'));

// eslint-disable-next-line no-unused-vars
const SidebarHeaderRoute = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            {/* Header */}
            <Suspense
                fallback={
                    <div className="loader-container">
                        <div className="loader-container-inner">
                        </div>
                    </div>
                }>
                <Header />
            </Suspense>

            {/* Sidebar */}
            <div className="app-main">
                <Suspense
                    fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                            </div>
                        </div>
                    }>
                    {/* <Sidebar /> */}
                </Suspense>

                <div className="app-main__outer">
                    {/* Main routes comes here */}
                    <div className="app-main__inner">
                        <Switch>
                            {/* <PublicRoute component={Market} path="/market" exact />
                            <PublicRoute component={MarketDetails} path="/market/details" />
                            <PublicRoute
                                component={MandiDetails}
                                path="/mandiprices/:commodity"
                                exact
                            />
                            <PublicRoute
                                component={MandiDetails}
                                path="/mandiprices/:commodity/:variety"
                                exact
                            />
                            <PublicRoute
                                component={MandiDetails}
                                path="/mandiprices/:commodity/:variety/:state"
                                exact
                            />
                            <PublicRoute
                                component={MandiDetails}
                                path="/mandiprices/:commodity/:variety/:state/:district"
                                exact
                            />
                            <PublicRoute
                                component={MandiDetails}
                                path="/mandiprices/:commodity/:variety/:state/:district/:market"
                                exact
                            />
                            <PublicRoute component={Mandi} path="/mandiprices/:searchText" exact />
                            <PublicRoute component={Mandi} path="/mandiprices" exact />
                            <PrivateRoute component={Account} path="/account" exact />
                            <PrivateRoute component={PersonalInfo} path="/account/personal-info" exact />
                            <PrivateRoute component={CompanyInfo} path="/account/company-info" exact />
                            <PrivateRoute component={Wishlist} path="/account/wishlist" exact />
                            <PrivateRoute
                                component={MyCommodities}
                                path="/account/my-commodities"
                                exact
                            />
                            <PrivateRoute component={PostRequirement} path="/post-requirement" /> */}

                            {/* Category search page links start */}
                            {/* <PublicRoute component={Category} path="/organics" exact />
                            <PublicRoute component={Category} path="/buyers" exact />
                            <PublicRoute component={Category} path="/sellers" exact />
                            <PublicRoute
                                component={Category}
                                path="/buyers/:commodityName([ A-Za-z0-9,%-]*)/:location([ A-Za-z0-9,%-]*)/:commodityId([0-9]*)"
                                exact
                            />
                            <PublicRoute
                                component={Category}
                                path="/sellers/:commodityName([ A-Za-z0-9,%-]*)/:location([ A-Za-z0-9,%-]*)/:commodityId([0-9]*)"
                                exact
                            />
                            <PublicRoute
                                component={Category}
                                path="/buyers/:commodityName([ A-Za-z0-9,%-]*)/:commodityId([0-9]*)"
                                exact
                            />
                            <PublicRoute
                                component={Category}
                                path="/sellers/:commodityName([ A-Za-z0-9,%-]*)/:commodityId([0-9]*)"
                                exact
                            />
                            <PublicRoute
                                component={Category}
                                path="/spices/:subCategoryId([0-9]*)"
                                exact
                            />
                            <PublicRoute
                                component={Category}
                                path="/grains/:subCategoryId([0-9]*)"
                                exact
                            /> */}
                            {/* Category search page links end */}

                            {/* <PublicRoute
                                component={CategoryDetails}
                                path="/requirement/:commodityTitle([ A-Za-z0-9,%-]*)/:id([0-9]*)/:requirementType([0-9]*)"
                            />
                            <PublicRoute component={TermsConditions} path="/terms-and-conditions" exact />
                            <PublicRoute component={PrivacyPolicy} path="/privacy-policy" exact />
                            <PublicRoute component={Contact} path="/contact-us" exact />
                            <PublicRoute component={About} path="/about-us" exact />
                            <PublicRoute component={WhatWeDo} path="/what-we-do" exact /> */}
                            <Route component={NotFound} />
                        </Switch>
                    </div>

                    {/* Footer */}
                    <Suspense
                        fallback={
                            <div className="loader-container">
                                <div className="loader-container-inner">
                                </div>
                            </div>
                        }>
                        <Footer />
                    </Suspense>
                </div>
            </div>
        </Fragment>
    );
};

export default SidebarHeaderRoute;
