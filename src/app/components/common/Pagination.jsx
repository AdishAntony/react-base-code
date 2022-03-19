/* eslint func-names: 0, no-console: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'rc-pagination';
import { PaginationLeft, PaginationRight } from '../../utils/Svg';
//import Select from 'rc-select';
//import localeInfo from '../../src/locale/en_US';
//import '../../assets/common/pagination.less';
//import 'rc-select/assets/index.less';

// Codes are commented for future use

// function onShowSizeChange(current, pageSize) {
//     console.log(current);
//     console.log(pageSize);
// }

// function onChange(current, pageSize) {
//     console.log('onChange:current=', current);
//     console.log('onChange:pageSize=', pageSize);
// }

const Page = props => {
    return props.total == undefined || props.total <= 10 ? (
        <></>
    ) : (
        <Pagination
            //selectComponentClass={Select}
            //showQuickJumper
            //showSizeChanger
            defaultPageSize={props.pageSize != undefined ? props.pageSize : 10}
            defaultCurrent={props.currentPage != undefined ? props.currentPage : 1}
            //onShowSizeChange={onShowSizeChange}
            onChange={props.onChange}
            total={props.total}
            //locale={localeInfo}
            prevIcon={<img src={PaginationLeft} />}
            nextIcon={<img src={PaginationRight} />}
        />
    );
};

Page.propTypes = {
    onChange: PropTypes.func,
    total: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number
};

export default Page;
