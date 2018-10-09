/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Contracting an insurance
 * @param {org.acme.companyregistry.RegisterLicense } license
 * @transaction
 */

function registerLicense ( license ){
    return getAssetRegistry('org.acme.companyregistry.companyLicense')
        .then(function(assetRegistry){
        var factory = getFactory()
        var licenseId = license.company.id + '' + license.organization.id
        var licenseAsset = factory.newResource('org.acme.companyregistry', 'companyLicense', licenseId)
        licenseAsset.registerDate = new Date()
        licenseAsset.company = license.company
        licenseAsset.organization = license.organization

        return assetRegistry.add(licenseAsset)
    })
}
