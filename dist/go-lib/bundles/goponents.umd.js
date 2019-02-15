(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/cdk/table'), require('ngx-toastr'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('goponents', ['exports', 'rxjs', '@angular/cdk/table', 'ngx-toastr', '@angular/core', '@angular/common'], factory) :
    (factory((global.goponents = {}),global.rxjs,global.ng.cdk.table,global.i1,global.ng.core,global.ng.common));
}(this, (function (exports,rxjs,table,i1,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoButtonComponent = /** @class */ (function () {
        function GoButtonComponent() {
            this.handleClick = new i0.EventEmitter();
            this.isProcessing = false;
        }
        // Public Methods
        // Public Methods
        /**
         * @return {?}
         */
        GoButtonComponent.prototype.clicked =
            // Public Methods
            /**
             * @return {?}
             */
            function () {
                if (this.isProcessing) {
                    return;
                }
                this.isProcessing = true;
                this.handleClick.emit(this.isProcessing);
            };
        /**
         * @return {?}
         */
        GoButtonComponent.prototype.classList = /**
         * @return {?}
         */
            function () {
                return {
                    'button__loading': this.isProcessing,
                    'button__disabled': (this.buttonType === 'disabled'),
                    'button__alert': (this.buttonType === 'alert')
                };
            };
        GoButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'go-button',
                        template: "<button class=\"button\"\n        (click)=\"clicked()\"\n        [disabled]=\"isProcessing\"\n        [ngClass]=\"classList()\">\n  <go-icon [icon]=\"buttonIcon\"></go-icon>\n  <ng-content></ng-content>\n</button>\n",
                        styles: [".button{background-color:#65b360;border-radius:2px;color:#fff;font-size:14px;height:44px;padding:14px;text-align:center;transition:.3s}.button:hover{background-color:#448640}.button__loading{background-color:#65b360;position:relative}.button__loading::after{-webkit-animation:.8s ease-in-out infinite loading;animation:.8s ease-in-out infinite loading;border-bottom-left-radius:2px;border-bottom-right-radius:2px;bottom:0;content:'';display:block;height:5px;left:0;position:absolute;width:100%;z-index:1}.button__loading.button__alert{background-color:#ed232b}.button__loading.button__alert::after{-webkit-animation:.8s infinite loading-red;animation:.8s infinite loading-red}.button__disabled{background-color:#ccc;color:#000}.button__disabled:hover{background-color:#999}.button__alert{background-color:#db1f26}.button__alert:hover{background-color:#9d161b}@-webkit-keyframes loading{0%{background:linear-gradient(to right,#488044 0,#579952 0)}5%{background:linear-gradient(to right,#488044 10%,#579952 10%)}10%{background:linear-gradient(to right,#488044 20%,#579952 20%)}15%{background:linear-gradient(to right,#488044 30%,#579952 30%)}20%{background:linear-gradient(to right,#488044 40%,#579952 40%)}25%{background:linear-gradient(to right,#488044 50%,#579952 50%)}30%{background:linear-gradient(to right,#488044 60%,#579952 60%)}35%{background:linear-gradient(to right,#488044 70%,#579952 70%)}40%{background:linear-gradient(to right,#488044 80%,#579952 80%)}45%{background:linear-gradient(to right,#488044 90%,#579952 90%)}50%{background:linear-gradient(to right,#579952 0,#488044 0)}55%{background:linear-gradient(to right,#579952 10%,#488044 10%)}60%{background:linear-gradient(to right,#579952 20%,#488044 20%)}65%{background:linear-gradient(to right,#579952 30%,#488044 30%)}70%{background:linear-gradient(to right,#579952 40%,#488044 40%)}75%{background:linear-gradient(to right,#579952 50%,#488044 50%)}80%{background:linear-gradient(to right,#579952 60%,#488044 60%)}85%{background:linear-gradient(to right,#579952 70%,#488044 70%)}90%{background:linear-gradient(to right,#579952 80%,#488044 80%)}95%{background:linear-gradient(to right,#579952 90%,#488044 90%)}100%{background:linear-gradient(to right,#579952 100%,#488044 100%)}}@keyframes loading{0%{background:linear-gradient(to right,#488044 0,#579952 0)}5%{background:linear-gradient(to right,#488044 10%,#579952 10%)}10%{background:linear-gradient(to right,#488044 20%,#579952 20%)}15%{background:linear-gradient(to right,#488044 30%,#579952 30%)}20%{background:linear-gradient(to right,#488044 40%,#579952 40%)}25%{background:linear-gradient(to right,#488044 50%,#579952 50%)}30%{background:linear-gradient(to right,#488044 60%,#579952 60%)}35%{background:linear-gradient(to right,#488044 70%,#579952 70%)}40%{background:linear-gradient(to right,#488044 80%,#579952 80%)}45%{background:linear-gradient(to right,#488044 90%,#579952 90%)}50%{background:linear-gradient(to right,#579952 0,#488044 0)}55%{background:linear-gradient(to right,#579952 10%,#488044 10%)}60%{background:linear-gradient(to right,#579952 20%,#488044 20%)}65%{background:linear-gradient(to right,#579952 30%,#488044 30%)}70%{background:linear-gradient(to right,#579952 40%,#488044 40%)}75%{background:linear-gradient(to right,#579952 50%,#488044 50%)}80%{background:linear-gradient(to right,#579952 60%,#488044 60%)}85%{background:linear-gradient(to right,#579952 70%,#488044 70%)}90%{background:linear-gradient(to right,#579952 80%,#488044 80%)}95%{background:linear-gradient(to right,#579952 90%,#488044 90%)}100%{background:linear-gradient(to right,#579952 100%,#488044 100%)}}@-webkit-keyframes loading-red{0%{background:linear-gradient(to right,#6a0f12 0,#db1f26 0)}5%{background:linear-gradient(to right,#6a0f12 10%,#db1f26 10%)}10%{background:linear-gradient(to right,#6a0f12 20%,#db1f26 20%)}15%{background:linear-gradient(to right,#6a0f12 30%,#db1f26 30%)}20%{background:linear-gradient(to right,#6a0f12 40%,#db1f26 40%)}25%{background:linear-gradient(to right,#6a0f12 50%,#db1f26 50%)}30%{background:linear-gradient(to right,#6a0f12 60%,#db1f26 60%)}35%{background:linear-gradient(to right,#6a0f12 70%,#db1f26 70%)}40%{background:linear-gradient(to right,#6a0f12 80%,#db1f26 80%)}45%{background:linear-gradient(to right,#6a0f12 90%,#db1f26 90%)}50%{background:linear-gradient(to right,#db1f26 0,#6a0f12 0)}55%{background:linear-gradient(to right,#db1f26 10%,#6a0f12 10%)}60%{background:linear-gradient(to right,#db1f26 20%,#6a0f12 20%)}65%{background:linear-gradient(to right,#db1f26 30%,#6a0f12 30%)}70%{background:linear-gradient(to right,#db1f26 40%,#6a0f12 40%)}75%{background:linear-gradient(to right,#db1f26 50%,#6a0f12 50%)}80%{background:linear-gradient(to right,#db1f26 60%,#6a0f12 60%)}85%{background:linear-gradient(to right,#db1f26 70%,#6a0f12 70%)}90%{background:linear-gradient(to right,#db1f26 80%,#6a0f12 80%)}95%{background:linear-gradient(to right,#db1f26 90%,#6a0f12 90%)}100%{background:linear-gradient(to right,#db1f26 100%,#6a0f12 100%)}}@keyframes loading-red{0%{background:linear-gradient(to right,#6a0f12 0,#db1f26 0)}5%{background:linear-gradient(to right,#6a0f12 10%,#db1f26 10%)}10%{background:linear-gradient(to right,#6a0f12 20%,#db1f26 20%)}15%{background:linear-gradient(to right,#6a0f12 30%,#db1f26 30%)}20%{background:linear-gradient(to right,#6a0f12 40%,#db1f26 40%)}25%{background:linear-gradient(to right,#6a0f12 50%,#db1f26 50%)}30%{background:linear-gradient(to right,#6a0f12 60%,#db1f26 60%)}35%{background:linear-gradient(to right,#6a0f12 70%,#db1f26 70%)}40%{background:linear-gradient(to right,#6a0f12 80%,#db1f26 80%)}45%{background:linear-gradient(to right,#6a0f12 90%,#db1f26 90%)}50%{background:linear-gradient(to right,#db1f26 0,#6a0f12 0)}55%{background:linear-gradient(to right,#db1f26 10%,#6a0f12 10%)}60%{background:linear-gradient(to right,#db1f26 20%,#6a0f12 20%)}65%{background:linear-gradient(to right,#db1f26 30%,#6a0f12 30%)}70%{background:linear-gradient(to right,#db1f26 40%,#6a0f12 40%)}75%{background:linear-gradient(to right,#db1f26 50%,#6a0f12 50%)}80%{background:linear-gradient(to right,#db1f26 60%,#6a0f12 60%)}85%{background:linear-gradient(to right,#db1f26 70%,#6a0f12 70%)}90%{background:linear-gradient(to right,#db1f26 80%,#6a0f12 80%)}95%{background:linear-gradient(to right,#db1f26 90%,#6a0f12 90%)}100%{background:linear-gradient(to right,#db1f26 100%,#6a0f12 100%)}}"]
                    }] }
        ];
        /** @nocollapse */
        GoButtonComponent.ctorParameters = function () { return []; };
        GoButtonComponent.propDecorators = {
            buttonIcon: [{ type: i0.Input }],
            buttonType: [{ type: i0.Input }],
            handleClick: [{ type: i0.Output }]
        };
        return GoButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoIconComponent = /** @class */ (function () {
        function GoIconComponent() {
        }
        GoIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'go-icon',
                        template: "<i class=\"material-icons\">{{icon}}</i>\n",
                        styles: [""]
                    }] }
        ];
        GoIconComponent.propDecorators = {
            icon: [{ type: i0.Input }]
        };
        return GoIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoIconModule = /** @class */ (function () {
        function GoIconModule() {
        }
        GoIconModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GoIconComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [GoIconComponent]
                    },] }
        ];
        return GoIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoButtonModule = /** @class */ (function () {
        function GoButtonModule() {
        }
        GoButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GoButtonComponent],
                        imports: [
                            common.CommonModule,
                            GoIconModule
                        ],
                        exports: [GoButtonComponent]
                    },] }
        ];
        return GoButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoCardComponent = /** @class */ (function () {
        function GoCardComponent() {
        }
        GoCardComponent.decorators = [
            { type: i0.Component, args: [{
                        encapsulation: i0.ViewEncapsulation.None,
                        selector: 'go-card',
                        template: "<div class=\"card\">\n  <header class=\"card__header\">\n    <ng-content select=\"[go-card-header]\"></ng-content>\n  </header>\n  <div class=\"card_content\">\n    <ng-content select=\"[go-card-content]\"></ng-content>\n  </div>\n</div>\n",
                        styles: [".card{background:#fff;border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,.2);display:flex;flex-direction:column;padding:1rem}.card__header{display:flex;justify-content:space-between;padding-bottom:1rem}.card__action-list{display:flex}.card__action-list li{cursor:pointer;padding:0 .4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.25s cubic-bezier(.25,.8,.25,1)}.card__action-list li:last-child{padding-right:0}.card__action-list li:hover{color:#93989d}"]
                    }] }
        ];
        return GoCardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoCardModule = /** @class */ (function () {
        function GoCardModule() {
        }
        GoCardModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GoCardComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [GoCardComponent]
                    },] }
        ];
        return GoCardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoTableComponent = /** @class */ (function () {
        function GoTableComponent() {
            this.tableDataSource$ = new rxjs.BehaviorSubject(this.data);
            this.sortDirection = 'sort-up';
        }
        /**
         * @return {?}
         */
        GoTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.activeColumn = this.sortableColumns[0];
                this.sortByColumn(this.activeColumn);
                if (this.actions && this.columns.indexOf('actions') === -1) {
                    this.columns.push('actions');
                }
            };
        // Public Methods
        // ================================================
        // Public Methods
        // ================================================
        /**
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.sortByColumn =
            // Public Methods
            // ================================================
            /**
             * @param {?} col
             * @return {?}
             */
            function (col) {
                if (!this.sortableColumns.includes(col)) {
                    return;
                }
                // Update Sort Classes
                this.setSortDirection(col);
                // Sort ascending if Sort down
                if (this.sortDirection === 'sort-up') {
                    this.sortAscending(col);
                }
                else {
                    // Must be sort up, sort descending.
                    this.sortDescending(col);
                }
            };
        /**
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.sortClass = /**
         * @param {?} col
         * @return {?}
         */
            function (col) {
                return {
                    'sort-up': (this.activeColumn === col && this.sortDirection === 'sort-up'),
                    'sort-down': (this.activeColumn === col && this.sortDirection === 'sort-down')
                };
            };
        // Private Methods
        // ================================================
        // Private Methods
        // ================================================
        /**
         * @private
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.sortDescending =
            // Private Methods
            // ================================================
            /**
             * @private
             * @param {?} col
             * @return {?}
             */
            function (col) {
                /** @type {?} */
                var sortedData = this.data.sort(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) {
                    if (a[col] < b[col]) {
                        return -1;
                    }
                    if (a[col] > b[col]) {
                        return 1;
                    }
                    return 0;
                }));
                this.updateTableData(sortedData);
            };
        /**
         * @private
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.sortAscending = /**
         * @private
         * @param {?} col
         * @return {?}
         */
            function (col) {
                /** @type {?} */
                var sortedData = this.data.sort(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) {
                    if (a[col] > b[col]) {
                        return -1;
                    }
                    if (a[col] < b[col]) {
                        return 1;
                    }
                    return 0;
                }));
                this.updateTableData(sortedData);
            };
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        GoTableComponent.prototype.updateTableData = /**
         * @private
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var values = Object.keys(data).map(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) { return data[key]; }));
                this.tableDataSource$.next(values);
            };
        /**
         * @private
         * @param {?} col
         * @return {?}
         */
        GoTableComponent.prototype.setSortDirection = /**
         * @private
         * @param {?} col
         * @return {?}
         */
            function (col) {
                /** @type {?} */
                var currentColumn = this.activeColumn;
                /** @type {?} */
                var sortDirection = this.sortDirection;
                this.activeColumn = col;
                if (sortDirection === 'sort-up' && this.activeColumn === currentColumn) {
                    this.sortDirection = 'sort-down';
                }
                else {
                    this.sortDirection = 'sort-up';
                }
            };
        GoTableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'go-table',
                        template: "<table cdk-table\n       class=\"tablesaw tablesaw-sortable tablesaw-swipe\"\n       [dataSource]=\"tableDataSource$\">\n\n  <ng-container *ngFor=\"let col of columns\" cdkColumnDef=\"{{col}}\">\n    <ng-container *ngIf=\"col !== 'actions'; else renderActions\">\n      <th cdk-header-cell\n          *cdkHeaderCellDef\n          [ngClass]=\"sortClass(col)\"\n          (click)=\"sortByColumn(col)\">{{col | titlecase}}</th>\n      <td cdk-cell *cdkCellDef=\"let row\">{{row[col]}}</td>\n    </ng-container>\n\n    <ng-template #renderActions>\n      <th cdk-header-cell *cdkHeaderCellDef>Actions</th>\n      <td cdk-cell *cdkCellDef=\"let row\">\n        <a *ngIf=\"actions.edit\" (click)=\"actions.edit(row.id)\">\n          <go-icon icon=\"edit\" class=\"mr2\"></go-icon>\n        </a>\n        <a *ngIf=\"actions.delete\" class=\"false\">\n          <go-icon icon=\"delete\" (click)=\"actions.delete(row.id)\"></go-icon>\n        </a>\n      </td>\n    </ng-template>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"columns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: columns;\"></tr>\n</table>\n",
                        styles: ["th{cursor:pointer;position:relative}th.sort-down::after,th.sort-up::after{border-left:5px solid transparent;border-right:5px solid transparent;content:'';height:0;position:absolute;right:5px;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:0}th.sort-up::after{border-top:5px solid #fff}th.sort-down::after{border-bottom:5px solid #fff}"]
                    }] }
        ];
        /** @nocollapse */
        GoTableComponent.ctorParameters = function () { return []; };
        GoTableComponent.propDecorators = {
            data: [{ type: i0.Input }],
            columns: [{ type: i0.Input }],
            sortableColumns: [{ type: i0.Input }],
            actions: [{ type: i0.Input }]
        };
        return GoTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoTableModule = /** @class */ (function () {
        function GoTableModule() {
        }
        GoTableModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GoTableComponent],
                        imports: [
                            table.CdkTableModule,
                            common.CommonModule,
                            GoIconModule
                        ],
                        exports: [GoTableComponent]
                    },] }
        ];
        return GoTableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoMessageService = /** @class */ (function () {
        function GoMessageService(toastr) {
            this.toastr = toastr;
        }
        /**
         * Show a success message.
         * @param msg
         * @param title
         */
        /**
         * Show a success message.
         * @param {?=} msg
         * @param {?=} title
         * @return {?}
         */
        GoMessageService.prototype.sendMessage = /**
         * Show a success message.
         * @param {?=} msg
         * @param {?=} title
         * @return {?}
         */
            function (msg, title) {
                if (msg === void 0) {
                    msg = '';
                }
                if (title === void 0) {
                    title = 'Success!';
                }
                this.toastr.success(msg, title);
            };
        /**
         * @param {?=} msg
         * @param {?=} title
         * @return {?}
         */
        GoMessageService.prototype.logError = /**
         * @param {?=} msg
         * @param {?=} title
         * @return {?}
         */
            function (msg, title) {
                if (msg === void 0) {
                    msg = '';
                }
                if (title === void 0) {
                    title = 'Something went wrong.';
                }
                this.toastr.error(msg, title);
            };
        GoMessageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoMessageService.ctorParameters = function () {
            return [
                { type: i1.ToastrService }
            ];
        };
        /** @nocollapse */ GoMessageService.ngInjectableDef = i0.defineInjectable({ factory: function GoMessageService_Factory() { return new GoMessageService(i0.inject(i1.ToastrService)); }, token: GoMessageService, providedIn: "root" });
        return GoMessageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoMessageModule = /** @class */ (function () {
        function GoMessageModule() {
        }
        GoMessageModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [],
                        providers: [GoMessageService],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return GoMessageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GoButtonComponent = GoButtonComponent;
    exports.GoButtonModule = GoButtonModule;
    exports.GoCardComponent = GoCardComponent;
    exports.GoCardModule = GoCardModule;
    exports.GoIconComponent = GoIconComponent;
    exports.GoIconModule = GoIconModule;
    exports.GoTableComponent = GoTableComponent;
    exports.GoTableModule = GoTableModule;
    exports.GoMessageService = GoMessageService;
    exports.GoMessageModule = GoMessageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=goponents.umd.js.map