import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum ActiveFilterType {
  All = 'ALL',
  Active = 'ACTIVE',
  NonActive = 'NON_ACTIVE'
}

export type AddressType = {
  __typename?: 'AddressType';
  id: Scalars['Int'];
  description: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Client = {
  __typename?: 'Client';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  drivingLicense?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  pimsId?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  clientLocations?: Maybe<Array<Maybe<ClientLocation>>>;
  clientPhones?: Maybe<Array<ClientPhone>>;
  clientAddress?: Maybe<Array<ClientAddress>>;
};

export type ClientAddress = {
  __typename?: 'ClientAddress';
  id: Scalars['Int'];
  address: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  clientId: Scalars['Int'];
  addressTypeId: Scalars['Int'];
  client?: Maybe<Client>;
  addressType?: Maybe<AddressType>;
};

export type ClientAddressInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  addressTypeId: Scalars['Int'];
};

export type ClientInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  pimsId?: Maybe<Scalars['String']>;
  clientPhones?: Array<ClientPhoneInput>;
  clientAddress?: Array<ClientAddressInput>;
  drivingLicense?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
};

export type ClientLocation = {
  __typename?: 'ClientLocation';
  id: Scalars['Int'];
  locationId: Scalars['Int'];
  clientId: Scalars['Int'];
  location?: Maybe<Location>;
  client?: Maybe<Client>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type ClientLocationInput = {
  locationId: Scalars['Int'];
  clientId: Scalars['Int'];
  isPrimary?: Maybe<Scalars['Boolean']>;
};

export type ClientPhone = {
  __typename?: 'ClientPhone';
  id: Scalars['Int'];
  phoneNumber?: Maybe<Scalars['String']>;
  clientId: Scalars['Int'];
  phoneTypeId: Scalars['Int'];
  client?: Maybe<Client>;
  phoneType?: Maybe<PhoneType>;
};

export type ClientPhoneInput = {
  phoneNumber: Scalars['String'];
  phoneTypeId: Scalars['Int'];
};


export type DelegatedUser = {
  __typename?: 'DelegatedUser';
  id: Scalars['Int'];
  locationUserId: Scalars['Int'];
  delegatedLocationUserId: Scalars['Int'];
  locationsUsers?: Maybe<LocationUser>;
  delegatedLocationsUsers?: Maybe<LocationUser>;
  isActive: Scalars['Boolean'];
};

export type DelegatedUserInput = {
  locationUserId: Scalars['Int'];
  delegatedLocationUserId: Scalars['Int'];
};

export type ForgetInput = {
  email: Scalars['String'];
};

export type ForgetPassword = {
  __typename?: 'ForgetPassword';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  email: Scalars['String'];
  otp: Scalars['String'];
  isUsed: Scalars['Boolean'];
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['Int'];
  name: Scalars['String'];
  organizationId: Scalars['Int'];
  isActive: Scalars['Boolean'];
  organization?: Maybe<Organization>;
  locationsUsers?: Maybe<Array<LocationUser>>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  HIN?: Maybe<Scalars['String']>;
};

export type LocationInput = {
  name: Scalars['String'];
  organizationId: Scalars['Int'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  HIN?: Maybe<Scalars['String']>;
};

export type LocationUser = {
  __typename?: 'LocationUser';
  id: Scalars['Int'];
  locationId: Scalars['Int'];
  userId: Scalars['Int'];
  roleId: Scalars['Int'];
  location?: Maybe<Location>;
  user?: Maybe<User>;
  role?: Maybe<Role>;
  displayName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isPendingAuth: Scalars['Boolean'];
  isPrimary: Scalars['Boolean'];
  notificationEmail?: Maybe<Scalars['String']>;
  vetLicenseState?: Maybe<Scalars['String']>;
  vetLicenseNumber?: Maybe<Scalars['String']>;
  vetLicenseExpiration?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  deaLicense?: Maybe<Scalars['String']>;
  deaLicenseExpiration?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  profilePictureThumbnail?: Maybe<Scalars['String']>;
  profilePicturePresignedUrl?: Maybe<Scalars['String']>;
  profilePictureThumbnailPresignedUrl?: Maybe<Scalars['String']>;
  delegatedUsers?: Maybe<Array<Maybe<DelegatedUser>>>;
  delegatedAccess?: Maybe<Array<Maybe<DelegatedUser>>>;
  nonDelegatedLocationUsers?: Maybe<Array<Maybe<LocationUser>>>;
  locationUserPhones?: Maybe<Array<LocationUserPhone>>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type LocationUserInput = {
  locationId: Scalars['Int'];
  userId: Scalars['Int'];
  roleId: Scalars['Int'];
  displayName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  notificationEmail?: Maybe<Scalars['String']>;
  vetLicenseState?: Maybe<Scalars['String']>;
  vetLicenseNumber?: Maybe<Scalars['String']>;
  vetLicenseExpiration?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  deaLicense?: Maybe<Scalars['String']>;
  deaLicenseExpiration?: Maybe<Scalars['String']>;
  locationUserPhones?: Array<LocationUserPhoneInput>;
};

export type LocationUserPhone = {
  __typename?: 'LocationUserPhone';
  id: Scalars['Int'];
  phoneNumber?: Maybe<Scalars['String']>;
  locationUserId: Scalars['Int'];
  phoneTypeId: Scalars['Int'];
  locationUser?: Maybe<LocationUser>;
  phoneType?: Maybe<PhoneType>;
};

export type LocationUserPhoneInput = {
  phoneNumber: Scalars['String'];
  phoneTypeId: Scalars['Int'];
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Module = {
  __typename?: 'Module';
  id: Scalars['Int'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  rolesModules?: Maybe<Array<RoleModule>>;
};

export type ModuleInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  null?: Maybe<Scalars['Boolean']>;
  AddOrganization: Organization;
  UpdateOrganization: Organization;
  AddLocation: Location;
  UpdateLocation: Location;
  AddUser: User;
  Login: AuthPayload;
  UpdateUser: User;
  AddRole: Role;
  UpdateRole: Role;
  AddModule: Module;
  UpdateModule: Module;
  AddRoleModule: RoleModule;
  UpdateRoleModule: RoleModule;
  AddLocationUser: LocationUser;
  UpdateLocationUser: LocationUser;
  AddClient: Client;
  UpdateClient: Client;
  AddDelegatedUser: Scalars['Int'];
  DeleteDelegatedUser: Scalars['Int'];
  UpdatePassword: User;
  ForgetPassword: ForgetPassword;
  OtpVerify?: Maybe<ForgetPassword>;
  LocationUserProfilePictureUpload: UploadedFileResponse;
  RemoveLocationUserProfilePicture: Scalars['String'];
  AddPrescription: Prescription;
};


export type MutationAddOrganizationArgs = {
  input: OrganizationInput;
};


export type MutationUpdateOrganizationArgs = {
  id: Scalars['Int'];
  input: UpdateOrganizationInput;
};


export type MutationAddLocationArgs = {
  input: LocationInput;
};


export type MutationUpdateLocationArgs = {
  id: Scalars['Int'];
  input: UpdateLocationInput;
};


export type MutationAddUserArgs = {
  input: UserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  input: UpdateUserInput;
  userPhones?: Array<UserPhoneInput>;
};


export type MutationAddRoleArgs = {
  input: RoleInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['Int'];
  input: UpdateRoleInput;
};


export type MutationAddModuleArgs = {
  input: ModuleInput;
};


export type MutationUpdateModuleArgs = {
  id: Scalars['Int'];
  input: UpdateModuleInput;
};


export type MutationAddRoleModuleArgs = {
  input: RoleModuleInput;
};


export type MutationUpdateRoleModuleArgs = {
  id: Scalars['Int'];
  input: UpdateRoleModuleInput;
};


export type MutationAddLocationUserArgs = {
  input: LocationUserInput;
};


export type MutationUpdateLocationUserArgs = {
  id: Scalars['Int'];
  input: UpdateLocationUserInput;
  locationUserPhones?: Array<LocationUserPhoneInput>;
};


export type MutationAddClientArgs = {
  input: ClientInput;
  locationId: Scalars['Int'];
};


export type MutationUpdateClientArgs = {
  id: Scalars['Int'];
  input: UpdateClientInput;
  clientPhones?: Array<ClientPhoneInput>;
  clientAddress?: Array<ClientAddressInput>;
};


export type MutationAddDelegatedUserArgs = {
  input: Array<Maybe<DelegatedUserInput>>;
};


export type MutationDeleteDelegatedUserArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type MutationUpdatePasswordArgs = {
  input: UpdateReset;
};


export type MutationForgetPasswordArgs = {
  input: ForgetInput;
};


export type MutationOtpVerifyArgs = {
  input?: Maybe<OtpInput>;
};


export type MutationLocationUserProfilePictureUploadArgs = {
  input: UploadFileInput;
};


export type MutationRemoveLocationUserProfilePictureArgs = {
  locationUserId: Scalars['Int'];
};


export type MutationAddPrescriptionArgs = {
  input: PrescriptionInput;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['Int'];
  name: Scalars['String'];
  dbaName?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  locations?: Maybe<Array<Location>>;
  clients?: Maybe<Array<Client>>;
};

export type OrganizationInput = {
  name: Scalars['String'];
  dbaName?: Maybe<Scalars['String']>;
};

export type OtpInput = {
  id: Scalars['Int'];
  otp: Scalars['String'];
};

export type PhoneType = {
  __typename?: 'PhoneType';
  id: Scalars['Int'];
  description: Scalars['String'];
};

export type Prescription = {
  __typename?: 'Prescription';
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  unitsPerFill?: Maybe<Scalars['Int']>;
  directions?: Maybe<Scalars['String']>;
  daysSupply?: Maybe<Scalars['Int']>;
  refills?: Maybe<Scalars['Int']>;
  expiration?: Maybe<Scalars['String']>;
  notifyClientDate?: Maybe<Scalars['String']>;
  autoShipPrompt?: Maybe<Scalars['String']>;
  noteToPharmacy?: Maybe<Scalars['String']>;
  noteToClient?: Maybe<Scalars['String']>;
  productDescription?: Maybe<Scalars['String']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isAuthorized?: Maybe<Scalars['Boolean']>;
  isDeclined?: Maybe<Scalars['Boolean']>;
  declineReason?: Maybe<Scalars['String']>;
};

export type PrescriptionInput = {
  productId?: Maybe<Scalars['Int']>;
  unitsPerFill?: Maybe<Scalars['Int']>;
  directions?: Maybe<Scalars['String']>;
  daysSupply?: Maybe<Scalars['Int']>;
  refills?: Maybe<Scalars['Int']>;
  expiration?: Maybe<Scalars['String']>;
  notifyClientDate?: Maybe<Scalars['String']>;
  autoShipPrompt?: Maybe<Scalars['String']>;
  noteToPharmacy?: Maybe<Scalars['String']>;
  noteToClient?: Maybe<Scalars['String']>;
  productDescription?: Maybe<Scalars['String']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isAuthorized?: Maybe<Scalars['Boolean']>;
  isDeclined?: Maybe<Scalars['Boolean']>;
  declineReason?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  sku: Scalars['Int'];
  title: Scalars['String'];
  isActive: Scalars['Boolean'];
  productStatusCode: Scalars['Int'];
  statusChangeDesc?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  ingredients: Scalars['String'];
  includes: Scalars['String'];
  directions?: Maybe<Scalars['String']>;
  precautions?: Maybe<Scalars['String']>;
  srp?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  requiresRx?: Maybe<Scalars['Boolean']>;
  individualPill?: Maybe<Scalars['Boolean']>;
  compound?: Maybe<Scalars['Boolean']>;
  diet?: Maybe<Scalars['Boolean']>;
  groundShipOnly?: Maybe<Scalars['Boolean']>;
  isControlled?: Maybe<Scalars['Boolean']>;
  hasFlavor?: Maybe<Scalars['Boolean']>;
  flavors?: Maybe<Scalars['String']>;
  isTempSensitive?: Maybe<Scalars['Boolean']>;
  isDropship?: Maybe<Scalars['Boolean']>;
  dosageDisplay?: Maybe<Scalars['String']>;
  dosageSort?: Maybe<Scalars['Int']>;
  packsizeDesc?: Maybe<Scalars['String']>;
  packsizeQty?: Maybe<Scalars['Int']>;
  packQtyQty?: Maybe<Scalars['Int']>;
  packQtyCode?: Maybe<Scalars['String']>;
  packDtyDisplay?: Maybe<Scalars['String']>;
  manufacturerName?: Maybe<Scalars['String']>;
  fullfillmentVendor?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  weightMin?: Maybe<Scalars['Int']>;
  weightMax?: Maybe<Scalars['Int']>;
  species?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  shelfLife?: Maybe<Scalars['Int']>;
  categories?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['String']>;
  defaultAutoship?: Maybe<Scalars['Int']>;
  shipping?: Maybe<Scalars['String']>;
  approvalTypeFID?: Maybe<Scalars['String']>;
  presentationFID?: Maybe<Scalars['String']>;
  subsidiarybrandFID?: Maybe<Scalars['String']>;
  unitMeasureFID?: Maybe<Scalars['String']>;
  normalizedStrength?: Maybe<Scalars['Int']>;
  productFamily?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  Organizations: Array<Organization>;
  GetOrganization?: Maybe<Organization>;
  Locations: Array<Location>;
  GetLocation?: Maybe<Location>;
  Users: Array<User>;
  GetUser?: Maybe<User>;
  Roles: Array<Role>;
  GetRole?: Maybe<Role>;
  Modules: Array<Module>;
  GetModule?: Maybe<Module>;
  RolesModules: Array<RoleModule>;
  GetRoleModule?: Maybe<RoleModule>;
  LocationsUsers: Array<LocationUser>;
  GetLocationUser?: Maybe<LocationUser>;
  Clients: Array<Client>;
  GetClient?: Maybe<Client>;
  DelegatedUsers: Array<DelegatedUser>;
  GetDelegatedUser?: Maybe<DelegatedUser>;
  GetClientLocationByLocationId?: Maybe<Array<Maybe<ClientLocation>>>;
  PhoneTypes: Array<PhoneType>;
  Products: Array<Product>;
  AddressTypes: Array<AddressType>;
};


export type QueryGetOrganizationArgs = {
  id: Scalars['Int'];
};


export type QueryGetLocationArgs = {
  id: Scalars['Int'];
};


export type QueryUsersArgs = {
  filter?: Maybe<Scalars['String']>;
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};


export type QueryGetRoleArgs = {
  id: Scalars['Int'];
};


export type QueryGetModuleArgs = {
  id: Scalars['Int'];
};


export type QueryGetRoleModuleArgs = {
  id: Scalars['Int'];
};


export type QueryLocationsUsersArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userFilter?: Maybe<Scalars['String']>;
  activeFilterType?: ActiveFilterType;
};


export type QueryGetLocationUserArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryClientsArgs = {
  filter?: Maybe<Scalars['String']>;
  activeFilterType?: ActiveFilterType;
};


export type QueryGetClientArgs = {
  id: Scalars['Int'];
};


export type QueryGetDelegatedUserArgs = {
  id: Scalars['Int'];
};


export type QueryGetClientLocationByLocationIdArgs = {
  locationId: Scalars['Int'];
  clientFilter?: Scalars['String'];
  activeFilterType?: ActiveFilterType;
};


export type QueryProductsArgs = {
  filter?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  canAuthorize: Scalars['Boolean'];
  rolesModules?: Maybe<Array<RoleModule>>;
  locationsUsers?: Maybe<Array<LocationUser>>;
};

export type RoleInput = {
  name: Scalars['String'];
  canAuthorize: Scalars['Boolean'];
};

export type RoleModule = {
  __typename?: 'RoleModule';
  id: Scalars['Int'];
  roleId: Scalars['Int'];
  moduleId: Scalars['Int'];
  isActive: Scalars['Boolean'];
  canView: Scalars['Boolean'];
  canEdit: Scalars['Boolean'];
  canDelete: Scalars['Boolean'];
  role?: Maybe<Role>;
  module?: Maybe<Module>;
};

export type RoleModuleInput = {
  roleId: Scalars['Int'];
  moduleId: Scalars['Int'];
  canView?: Maybe<Scalars['Boolean']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canDelete?: Maybe<Scalars['Boolean']>;
};

export type UpdateClientInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  pimsId?: Maybe<Scalars['String']>;
  drivingLicense?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateClientLocationInput = {
  isPrimary?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateLocationInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  HIN?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateLocationUserInput = {
  roleId?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  isPendingAuth?: Maybe<Scalars['Boolean']>;
  notificationEmail?: Maybe<Scalars['String']>;
  vetLicenseState?: Maybe<Scalars['String']>;
  vetLicenseNumber?: Maybe<Scalars['String']>;
  vetLicenseExpiration?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  deaLicense?: Maybe<Scalars['String']>;
  deaLicenseExpiration?: Maybe<Scalars['String']>;
};

export type UpdateModuleInput = {
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateOrganizationInput = {
  name?: Maybe<Scalars['String']>;
  dbaName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateReset = {
  id: Scalars['Int'];
  password: Scalars['String'];
};

export type UpdateRoleInput = {
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateRoleModuleInput = {
  roleId?: Maybe<Scalars['Int']>;
  moduleId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  canView?: Maybe<Scalars['Boolean']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canDelete?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserInput = {
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};


export type UploadFileInput = {
  file: Scalars['Upload'];
  locationUserId: Scalars['Int'];
};

export type UploadedFileResponse = {
  __typename?: 'UploadedFileResponse';
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  newFileName: Scalars['String'];
  thumbnailFileName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  locationsUsers?: Maybe<Array<LocationUser>>;
  userPhones?: Maybe<Array<UserPhone>>;
};

export type UserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  userPhones?: Array<UserPhoneInput>;
};

export type UserPhone = {
  __typename?: 'UserPhone';
  id: Scalars['Int'];
  phoneNumber?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  phoneTypeId: Scalars['Int'];
  user?: Maybe<User>;
  phoneType?: Maybe<PhoneType>;
};

export type UserPhoneInput = {
  phoneNumber: Scalars['String'];
  phoneTypeId: Scalars['Int'];
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { Users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'name' | 'email'>
  )> }
);

export type QueryQueryVariables = Exact<{
  locationsUsersUserFilter?: Maybe<Scalars['String']>;
}>;


export type QueryQuery = (
  { __typename?: 'Query' }
  & { LocationsUsers: Array<(
    { __typename?: 'LocationUser' }
    & Pick<LocationUser, 'id' | 'locationId' | 'isPrimary'>
    & { location?: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'name'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email'>
    )> }
  )> }
);

export type AddUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { AddUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email'>
  ) }
);

export type TokenMutationMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type TokenMutationMutation = (
  { __typename?: 'Mutation' }
  & { Login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'name' | 'email' | 'isActive'>
    ) }
  ) }
);

export type MutationMutationVariables = Exact<{
  forgetPasswordInput: ForgetInput;
}>;


export type MutationMutation = (
  { __typename?: 'Mutation' }
  & { ForgetPassword: (
    { __typename?: 'ForgetPassword' }
    & Pick<ForgetPassword, 'id' | 'userId' | 'email' | 'otp'>
  ) }
);

export type ResetMutationMutationVariables = Exact<{
  updatePasswordInput: UpdateReset;
}>;


export type ResetMutationMutation = (
  { __typename?: 'Mutation' }
  & { UpdatePassword: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'name' | 'email'>
  ) }
);

export type OtpVerifyMutationMutationVariables = Exact<{
  otpVerifyInput?: Maybe<OtpInput>;
}>;


export type OtpVerifyMutationMutation = (
  { __typename?: 'Mutation' }
  & { OtpVerify?: Maybe<(
    { __typename?: 'ForgetPassword' }
    & Pick<ForgetPassword, 'id' | 'userId' | 'email'>
  )> }
);

export type GetClientLocationByLocationIdQueryVariables = Exact<{
  getClientLocationByLocationIdLocationId: Scalars['Int'];
  getClientLocationByLocationIdClientFilter: Scalars['String'];
  getClientLocationByLocationIdActiveFilterType: ActiveFilterType;
}>;


export type GetClientLocationByLocationIdQuery = (
  { __typename?: 'Query' }
  & { GetClientLocationByLocationId?: Maybe<Array<Maybe<(
    { __typename?: 'ClientLocation' }
    & Pick<ClientLocation, 'id' | 'locationId' | 'clientId'>
    & { client?: Maybe<(
      { __typename?: 'Client' }
      & Pick<Client, 'name' | 'drivingLicense' | 'birthdate' | 'email'>
    )> }
  )>>> }
);

export type GetClientProfileQueryVariables = Exact<{
  getClientId: Scalars['Int'];
}>;


export type GetClientProfileQuery = (
  { __typename?: 'Query' }
  & { GetClient?: Maybe<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'email' | 'drivingLicense' | 'birthdate' | 'pimsId' | 'isActive'>
    & { clientPhones?: Maybe<Array<(
      { __typename?: 'ClientPhone' }
      & Pick<ClientPhone, 'phoneTypeId' | 'phoneNumber'>
      & { phoneType?: Maybe<(
        { __typename?: 'PhoneType' }
        & Pick<PhoneType, 'description'>
      )> }
    )>>, clientAddress?: Maybe<Array<(
      { __typename?: 'ClientAddress' }
      & Pick<ClientAddress, 'address' | 'city' | 'state' | 'zip' | 'addressTypeId'>
      & { addressType?: Maybe<(
        { __typename?: 'AddressType' }
        & Pick<AddressType, 'description'>
      )> }
    )>> }
  )>, PhoneTypes: Array<(
    { __typename?: 'PhoneType' }
    & Pick<PhoneType, 'id' | 'description'>
  )>, AddressTypes: Array<(
    { __typename?: 'AddressType' }
    & Pick<AddressType, 'id' | 'description'>
  )> }
);

export type UpdateClientMutationVariables = Exact<{
  updateClientId: Scalars['Int'];
  updateClientInput: UpdateClientInput;
  updateClientClientPhones: Array<ClientPhoneInput> | ClientPhoneInput;
  updateClientClientAddress: Array<ClientAddressInput> | ClientAddressInput;
}>;


export type UpdateClientMutation = (
  { __typename?: 'Mutation' }
  & { UpdateClient: (
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'name' | 'email' | 'drivingLicense' | 'birthdate' | 'pimsId' | 'isActive'>
    & { clientPhones?: Maybe<Array<(
      { __typename?: 'ClientPhone' }
      & Pick<ClientPhone, 'phoneNumber'>
      & { phoneType?: Maybe<(
        { __typename?: 'PhoneType' }
        & Pick<PhoneType, 'description'>
      )> }
    )>>, clientAddress?: Maybe<Array<(
      { __typename?: 'ClientAddress' }
      & Pick<ClientAddress, 'address' | 'city' | 'state' | 'zip'>
      & { addressType?: Maybe<(
        { __typename?: 'AddressType' }
        & Pick<AddressType, 'description'>
      )> }
    )>> }
  ) }
);

export type GetUserQueryVariables = Exact<{
  getUserId: Scalars['Int'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { PhoneTypes: Array<(
    { __typename?: 'PhoneType' }
    & Pick<PhoneType, 'id' | 'description'>
  )>, GetUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username' | 'email'>
    & { userPhones?: Maybe<Array<(
      { __typename?: 'UserPhone' }
      & Pick<UserPhone, 'phoneTypeId' | 'phoneNumber'>
      & { phoneType?: Maybe<(
        { __typename?: 'PhoneType' }
        & Pick<PhoneType, 'description'>
      )> }
    )>>, locationsUsers?: Maybe<Array<(
      { __typename?: 'LocationUser' }
      & Pick<LocationUser, 'id' | 'isPrimary' | 'displayName' | 'profilePictureThumbnailPresignedUrl'>
      & { location?: Maybe<(
        { __typename?: 'Location' }
        & Pick<Location, 'id' | 'name'>
      )> }
    )>> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  updateUserId: Scalars['Int'];
  updateUserInput: UpdateUserInput;
  updateUserUserPhones: Array<UserPhoneInput> | UserPhoneInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { UpdateUser: (
    { __typename?: 'User' }
    & Pick<User, 'name'>
  ) }
);

export type UserDetailQueryQueryVariables = Exact<{
  getLocationUserId?: Maybe<Scalars['Int']>;
}>;


export type UserDetailQueryQuery = (
  { __typename?: 'Query' }
  & { PhoneTypes: Array<(
    { __typename?: 'PhoneType' }
    & Pick<PhoneType, 'id' | 'description'>
  )>, GetLocationUser?: Maybe<(
    { __typename?: 'LocationUser' }
    & Pick<LocationUser, 'title' | 'vetLicenseState' | 'vetLicenseNumber' | 'vetLicenseExpiration' | 'deaLicense' | 'deaLicenseExpiration' | 'notificationEmail' | 'id' | 'displayName' | 'email' | 'userId' | 'isPendingAuth' | 'locationId' | 'profilePicturePresignedUrl' | 'profilePictureThumbnailPresignedUrl'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'name' | 'email'>
    )>, role?: Maybe<(
      { __typename?: 'Role' }
      & Pick<Role, 'name'>
    )>, location?: Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'name'>
    )>, delegatedUsers?: Maybe<Array<Maybe<(
      { __typename?: 'DelegatedUser' }
      & Pick<DelegatedUser, 'id'>
      & { delegatedLocationsUsers?: Maybe<(
        { __typename?: 'LocationUser' }
        & Pick<LocationUser, 'id'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'name'>
        )>, role?: Maybe<(
          { __typename?: 'Role' }
          & Pick<Role, 'name'>
        )> }
      )> }
    )>>>, nonDelegatedLocationUsers?: Maybe<Array<Maybe<(
      { __typename?: 'LocationUser' }
      & Pick<LocationUser, 'id'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'name'>
      )>, role?: Maybe<(
        { __typename?: 'Role' }
        & Pick<Role, 'name'>
      )> }
    )>>>, locationUserPhones?: Maybe<Array<(
      { __typename?: 'LocationUserPhone' }
      & Pick<LocationUserPhone, 'phoneNumber' | 'phoneTypeId'>
      & { phoneType?: Maybe<(
        { __typename?: 'PhoneType' }
        & Pick<PhoneType, 'description'>
      )> }
    )>> }
  )> }
);

export type SaveNotificationEmailMutationVariables = Exact<{
  updateLocationUserId: Scalars['Int'];
  updateLocationUserInput: UpdateLocationUserInput;
}>;


export type SaveNotificationEmailMutation = (
  { __typename?: 'Mutation' }
  & { UpdateLocationUser: (
    { __typename?: 'LocationUser' }
    & Pick<LocationUser, 'isPendingAuth' | 'notificationEmail'>
  ) }
);

export type SaveProfileDetailsMutationVariables = Exact<{
  updateLocationUserId: Scalars['Int'];
  updateLocationUserInput: UpdateLocationUserInput;
  updateLocationUserLocationUserPhones: Array<LocationUserPhoneInput> | LocationUserPhoneInput;
}>;


export type SaveProfileDetailsMutation = (
  { __typename?: 'Mutation' }
  & { UpdateLocationUser: (
    { __typename?: 'LocationUser' }
    & Pick<LocationUser, 'isPendingAuth' | 'notificationEmail'>
  ) }
);

export type SwitchlocationMutationVariables = Exact<{
  updateLocationUserId: Scalars['Int'];
  updateLocationUserInput: UpdateLocationUserInput;
}>;


export type SwitchlocationMutation = (
  { __typename?: 'Mutation' }
  & { UpdateLocationUser: (
    { __typename?: 'LocationUser' }
    & Pick<LocationUser, 'id'>
  ) }
);

export type AddDelegatedUserMutationMutationVariables = Exact<{
  addDelegatedUserInput: Array<Maybe<DelegatedUserInput>> | Maybe<DelegatedUserInput>;
}>;


export type AddDelegatedUserMutationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'AddDelegatedUser'>
);

export type RemoveDelegatedUserMutationMutationVariables = Exact<{
  deleteDelegatedUserIds?: Maybe<Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>>;
}>;


export type RemoveDelegatedUserMutationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteDelegatedUser'>
);

export type UploadImageMutationMutationVariables = Exact<{
  singleUploadInput: UploadFileInput;
}>;


export type UploadImageMutationMutation = (
  { __typename?: 'Mutation' }
  & { LocationUserProfilePictureUpload: (
    { __typename?: 'UploadedFileResponse' }
    & Pick<UploadedFileResponse, 'filename'>
  ) }
);

export type RemoveProfilePictureMutationMutationVariables = Exact<{
  removeLocationUserProfilePictureLocationUserId: Scalars['Int'];
}>;


export type RemoveProfilePictureMutationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'RemoveLocationUserProfilePicture'>
);


export const UsersDocument = gql`
    query Users {
  Users {
    id
    username
    name
    email
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const QueryDocument = gql`
    query Query($locationsUsersUserFilter: String) {
  LocationsUsers(userFilter: $locationsUsersUserFilter) {
    id
    locationId
    isPrimary
    location {
      name
    }
    user {
      id
      name
      email
    }
  }
}
    `;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *      locationsUsersUserFilter: // value for 'locationsUsersUserFilter'
 *   },
 * });
 */
export function useQueryQuery(baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;
export const AddUserDocument = gql`
    mutation AddUser($input: UserInput!) {
  AddUser(input: $input) {
    id
    username
    email
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const TokenMutationDocument = gql`
    mutation TokenMutation($loginInput: LoginInput!) {
  Login(input: $loginInput) {
    token
    user {
      id
      username
      name
      email
      isActive
    }
  }
}
    `;
export type TokenMutationMutationFn = Apollo.MutationFunction<TokenMutationMutation, TokenMutationMutationVariables>;

/**
 * __useTokenMutationMutation__
 *
 * To run a mutation, you first call `useTokenMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenMutationMutation, { data, loading, error }] = useTokenMutationMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useTokenMutationMutation(baseOptions?: Apollo.MutationHookOptions<TokenMutationMutation, TokenMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenMutationMutation, TokenMutationMutationVariables>(TokenMutationDocument, options);
      }
export type TokenMutationMutationHookResult = ReturnType<typeof useTokenMutationMutation>;
export type TokenMutationMutationResult = Apollo.MutationResult<TokenMutationMutation>;
export type TokenMutationMutationOptions = Apollo.BaseMutationOptions<TokenMutationMutation, TokenMutationMutationVariables>;
export const MutationDocument = gql`
    mutation Mutation($forgetPasswordInput: ForgetInput!) {
  ForgetPassword(input: $forgetPasswordInput) {
    id
    userId
    email
    otp
  }
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      forgetPasswordInput: // value for 'forgetPasswordInput'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const ResetMutationDocument = gql`
    mutation ResetMutation($updatePasswordInput: UpdateReset!) {
  UpdatePassword(input: $updatePasswordInput) {
    id
    username
    name
    email
  }
}
    `;
export type ResetMutationMutationFn = Apollo.MutationFunction<ResetMutationMutation, ResetMutationMutationVariables>;

/**
 * __useResetMutationMutation__
 *
 * To run a mutation, you first call `useResetMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetMutationMutation, { data, loading, error }] = useResetMutationMutation({
 *   variables: {
 *      updatePasswordInput: // value for 'updatePasswordInput'
 *   },
 * });
 */
export function useResetMutationMutation(baseOptions?: Apollo.MutationHookOptions<ResetMutationMutation, ResetMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetMutationMutation, ResetMutationMutationVariables>(ResetMutationDocument, options);
      }
export type ResetMutationMutationHookResult = ReturnType<typeof useResetMutationMutation>;
export type ResetMutationMutationResult = Apollo.MutationResult<ResetMutationMutation>;
export type ResetMutationMutationOptions = Apollo.BaseMutationOptions<ResetMutationMutation, ResetMutationMutationVariables>;
export const OtpVerifyMutationDocument = gql`
    mutation OtpVerifyMutation($otpVerifyInput: OtpInput) {
  OtpVerify(input: $otpVerifyInput) {
    id
    userId
    email
  }
}
    `;
export type OtpVerifyMutationMutationFn = Apollo.MutationFunction<OtpVerifyMutationMutation, OtpVerifyMutationMutationVariables>;

/**
 * __useOtpVerifyMutationMutation__
 *
 * To run a mutation, you first call `useOtpVerifyMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOtpVerifyMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [otpVerifyMutationMutation, { data, loading, error }] = useOtpVerifyMutationMutation({
 *   variables: {
 *      otpVerifyInput: // value for 'otpVerifyInput'
 *   },
 * });
 */
export function useOtpVerifyMutationMutation(baseOptions?: Apollo.MutationHookOptions<OtpVerifyMutationMutation, OtpVerifyMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OtpVerifyMutationMutation, OtpVerifyMutationMutationVariables>(OtpVerifyMutationDocument, options);
      }
export type OtpVerifyMutationMutationHookResult = ReturnType<typeof useOtpVerifyMutationMutation>;
export type OtpVerifyMutationMutationResult = Apollo.MutationResult<OtpVerifyMutationMutation>;
export type OtpVerifyMutationMutationOptions = Apollo.BaseMutationOptions<OtpVerifyMutationMutation, OtpVerifyMutationMutationVariables>;
export const GetClientLocationByLocationIdDocument = gql`
    query GetClientLocationByLocationId($getClientLocationByLocationIdLocationId: Int!, $getClientLocationByLocationIdClientFilter: String!, $getClientLocationByLocationIdActiveFilterType: ActiveFilterType!) {
  GetClientLocationByLocationId(
    locationId: $getClientLocationByLocationIdLocationId
    clientFilter: $getClientLocationByLocationIdClientFilter
    activeFilterType: $getClientLocationByLocationIdActiveFilterType
  ) {
    id
    locationId
    clientId
    client {
      name
      drivingLicense
      birthdate
      email
    }
  }
}
    `;

/**
 * __useGetClientLocationByLocationIdQuery__
 *
 * To run a query within a React component, call `useGetClientLocationByLocationIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientLocationByLocationIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientLocationByLocationIdQuery({
 *   variables: {
 *      getClientLocationByLocationIdLocationId: // value for 'getClientLocationByLocationIdLocationId'
 *      getClientLocationByLocationIdClientFilter: // value for 'getClientLocationByLocationIdClientFilter'
 *      getClientLocationByLocationIdActiveFilterType: // value for 'getClientLocationByLocationIdActiveFilterType'
 *   },
 * });
 */
export function useGetClientLocationByLocationIdQuery(baseOptions: Apollo.QueryHookOptions<GetClientLocationByLocationIdQuery, GetClientLocationByLocationIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientLocationByLocationIdQuery, GetClientLocationByLocationIdQueryVariables>(GetClientLocationByLocationIdDocument, options);
      }
export function useGetClientLocationByLocationIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientLocationByLocationIdQuery, GetClientLocationByLocationIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientLocationByLocationIdQuery, GetClientLocationByLocationIdQueryVariables>(GetClientLocationByLocationIdDocument, options);
        }
export type GetClientLocationByLocationIdQueryHookResult = ReturnType<typeof useGetClientLocationByLocationIdQuery>;
export type GetClientLocationByLocationIdLazyQueryHookResult = ReturnType<typeof useGetClientLocationByLocationIdLazyQuery>;
export type GetClientLocationByLocationIdQueryResult = Apollo.QueryResult<GetClientLocationByLocationIdQuery, GetClientLocationByLocationIdQueryVariables>;
export const GetClientProfileDocument = gql`
    query GetClientProfile($getClientId: Int!) {
  GetClient(id: $getClientId) {
    id
    name
    email
    drivingLicense
    birthdate
    pimsId
    isActive
    clientPhones {
      phoneType {
        description
      }
      phoneTypeId
      phoneNumber
    }
    clientAddress {
      address
      city
      state
      zip
      addressTypeId
      addressType {
        description
      }
    }
  }
  PhoneTypes {
    id
    description
  }
  AddressTypes {
    id
    description
  }
}
    `;

/**
 * __useGetClientProfileQuery__
 *
 * To run a query within a React component, call `useGetClientProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientProfileQuery({
 *   variables: {
 *      getClientId: // value for 'getClientId'
 *   },
 * });
 */
export function useGetClientProfileQuery(baseOptions: Apollo.QueryHookOptions<GetClientProfileQuery, GetClientProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClientProfileQuery, GetClientProfileQueryVariables>(GetClientProfileDocument, options);
      }
export function useGetClientProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClientProfileQuery, GetClientProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClientProfileQuery, GetClientProfileQueryVariables>(GetClientProfileDocument, options);
        }
export type GetClientProfileQueryHookResult = ReturnType<typeof useGetClientProfileQuery>;
export type GetClientProfileLazyQueryHookResult = ReturnType<typeof useGetClientProfileLazyQuery>;
export type GetClientProfileQueryResult = Apollo.QueryResult<GetClientProfileQuery, GetClientProfileQueryVariables>;
export const UpdateClientDocument = gql`
    mutation UpdateClient($updateClientId: Int!, $updateClientInput: UpdateClientInput!, $updateClientClientPhones: [ClientPhoneInput!]!, $updateClientClientAddress: [ClientAddressInput!]!) {
  UpdateClient(
    id: $updateClientId
    input: $updateClientInput
    clientPhones: $updateClientClientPhones
    clientAddress: $updateClientClientAddress
  ) {
    id
    name
    email
    drivingLicense
    birthdate
    pimsId
    isActive
    clientPhones {
      phoneNumber
      phoneType {
        description
      }
    }
    clientAddress {
      address
      city
      state
      zip
      addressType {
        description
      }
    }
  }
}
    `;
export type UpdateClientMutationFn = Apollo.MutationFunction<UpdateClientMutation, UpdateClientMutationVariables>;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      updateClientId: // value for 'updateClientId'
 *      updateClientInput: // value for 'updateClientInput'
 *      updateClientClientPhones: // value for 'updateClientClientPhones'
 *      updateClientClientAddress: // value for 'updateClientClientAddress'
 *   },
 * });
 */
export function useUpdateClientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClientMutation, UpdateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, options);
      }
export type UpdateClientMutationHookResult = ReturnType<typeof useUpdateClientMutation>;
export type UpdateClientMutationResult = Apollo.MutationResult<UpdateClientMutation>;
export type UpdateClientMutationOptions = Apollo.BaseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>;
export const GetUserDocument = gql`
    query GetUser($getUserId: Int!) {
  PhoneTypes {
    id
    description
  }
  GetUser(id: $getUserId) {
    id
    name
    username
    email
    userPhones {
      phoneType {
        description
      }
      phoneTypeId
      phoneNumber
    }
    locationsUsers {
      id
      isPrimary
      displayName
      profilePictureThumbnailPresignedUrl
      location {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      getUserId: // value for 'getUserId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserId: Int!, $updateUserInput: UpdateUserInput!, $updateUserUserPhones: [UserPhoneInput!]!) {
  UpdateUser(
    id: $updateUserId
    input: $updateUserInput
    userPhones: $updateUserUserPhones
  ) {
    name
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserId: // value for 'updateUserId'
 *      updateUserInput: // value for 'updateUserInput'
 *      updateUserUserPhones: // value for 'updateUserUserPhones'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserDetailQueryDocument = gql`
    query userDetailQuery($getLocationUserId: Int) {
  PhoneTypes {
    id
    description
  }
  GetLocationUser(id: $getLocationUserId) {
    user {
      username
      name
      email
    }
    title
    role {
      name
    }
    vetLicenseState
    vetLicenseNumber
    vetLicenseExpiration
    deaLicense
    deaLicenseExpiration
    notificationEmail
    id
    displayName
    email
    userId
    isPendingAuth
    locationId
    location {
      name
    }
    delegatedUsers {
      id
      delegatedLocationsUsers {
        id
        user {
          name
        }
        role {
          name
        }
      }
    }
    nonDelegatedLocationUsers {
      id
      user {
        name
      }
      role {
        name
      }
    }
    locationUserPhones {
      phoneType {
        description
      }
      phoneNumber
      phoneTypeId
    }
    profilePicturePresignedUrl
    profilePictureThumbnailPresignedUrl
  }
}
    `;

/**
 * __useUserDetailQueryQuery__
 *
 * To run a query within a React component, call `useUserDetailQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailQueryQuery({
 *   variables: {
 *      getLocationUserId: // value for 'getLocationUserId'
 *   },
 * });
 */
export function useUserDetailQueryQuery(baseOptions?: Apollo.QueryHookOptions<UserDetailQueryQuery, UserDetailQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDetailQueryQuery, UserDetailQueryQueryVariables>(UserDetailQueryDocument, options);
      }
export function useUserDetailQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailQueryQuery, UserDetailQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDetailQueryQuery, UserDetailQueryQueryVariables>(UserDetailQueryDocument, options);
        }
export type UserDetailQueryQueryHookResult = ReturnType<typeof useUserDetailQueryQuery>;
export type UserDetailQueryLazyQueryHookResult = ReturnType<typeof useUserDetailQueryLazyQuery>;
export type UserDetailQueryQueryResult = Apollo.QueryResult<UserDetailQueryQuery, UserDetailQueryQueryVariables>;
export const SaveNotificationEmailDocument = gql`
    mutation saveNotificationEmail($updateLocationUserId: Int!, $updateLocationUserInput: UpdateLocationUserInput!) {
  UpdateLocationUser(id: $updateLocationUserId, input: $updateLocationUserInput) {
    isPendingAuth
    notificationEmail
  }
}
    `;
export type SaveNotificationEmailMutationFn = Apollo.MutationFunction<SaveNotificationEmailMutation, SaveNotificationEmailMutationVariables>;

/**
 * __useSaveNotificationEmailMutation__
 *
 * To run a mutation, you first call `useSaveNotificationEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveNotificationEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveNotificationEmailMutation, { data, loading, error }] = useSaveNotificationEmailMutation({
 *   variables: {
 *      updateLocationUserId: // value for 'updateLocationUserId'
 *      updateLocationUserInput: // value for 'updateLocationUserInput'
 *   },
 * });
 */
export function useSaveNotificationEmailMutation(baseOptions?: Apollo.MutationHookOptions<SaveNotificationEmailMutation, SaveNotificationEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveNotificationEmailMutation, SaveNotificationEmailMutationVariables>(SaveNotificationEmailDocument, options);
      }
export type SaveNotificationEmailMutationHookResult = ReturnType<typeof useSaveNotificationEmailMutation>;
export type SaveNotificationEmailMutationResult = Apollo.MutationResult<SaveNotificationEmailMutation>;
export type SaveNotificationEmailMutationOptions = Apollo.BaseMutationOptions<SaveNotificationEmailMutation, SaveNotificationEmailMutationVariables>;
export const SaveProfileDetailsDocument = gql`
    mutation saveProfileDetails($updateLocationUserId: Int!, $updateLocationUserInput: UpdateLocationUserInput!, $updateLocationUserLocationUserPhones: [LocationUserPhoneInput!]!) {
  UpdateLocationUser(
    id: $updateLocationUserId
    input: $updateLocationUserInput
    locationUserPhones: $updateLocationUserLocationUserPhones
  ) {
    isPendingAuth
    notificationEmail
  }
}
    `;
export type SaveProfileDetailsMutationFn = Apollo.MutationFunction<SaveProfileDetailsMutation, SaveProfileDetailsMutationVariables>;

/**
 * __useSaveProfileDetailsMutation__
 *
 * To run a mutation, you first call `useSaveProfileDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveProfileDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveProfileDetailsMutation, { data, loading, error }] = useSaveProfileDetailsMutation({
 *   variables: {
 *      updateLocationUserId: // value for 'updateLocationUserId'
 *      updateLocationUserInput: // value for 'updateLocationUserInput'
 *      updateLocationUserLocationUserPhones: // value for 'updateLocationUserLocationUserPhones'
 *   },
 * });
 */
export function useSaveProfileDetailsMutation(baseOptions?: Apollo.MutationHookOptions<SaveProfileDetailsMutation, SaveProfileDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveProfileDetailsMutation, SaveProfileDetailsMutationVariables>(SaveProfileDetailsDocument, options);
      }
export type SaveProfileDetailsMutationHookResult = ReturnType<typeof useSaveProfileDetailsMutation>;
export type SaveProfileDetailsMutationResult = Apollo.MutationResult<SaveProfileDetailsMutation>;
export type SaveProfileDetailsMutationOptions = Apollo.BaseMutationOptions<SaveProfileDetailsMutation, SaveProfileDetailsMutationVariables>;
export const SwitchlocationDocument = gql`
    mutation switchlocation($updateLocationUserId: Int!, $updateLocationUserInput: UpdateLocationUserInput!) {
  UpdateLocationUser(id: $updateLocationUserId, input: $updateLocationUserInput) {
    id
  }
}
    `;
export type SwitchlocationMutationFn = Apollo.MutationFunction<SwitchlocationMutation, SwitchlocationMutationVariables>;

/**
 * __useSwitchlocationMutation__
 *
 * To run a mutation, you first call `useSwitchlocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSwitchlocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [switchlocationMutation, { data, loading, error }] = useSwitchlocationMutation({
 *   variables: {
 *      updateLocationUserId: // value for 'updateLocationUserId'
 *      updateLocationUserInput: // value for 'updateLocationUserInput'
 *   },
 * });
 */
export function useSwitchlocationMutation(baseOptions?: Apollo.MutationHookOptions<SwitchlocationMutation, SwitchlocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SwitchlocationMutation, SwitchlocationMutationVariables>(SwitchlocationDocument, options);
      }
export type SwitchlocationMutationHookResult = ReturnType<typeof useSwitchlocationMutation>;
export type SwitchlocationMutationResult = Apollo.MutationResult<SwitchlocationMutation>;
export type SwitchlocationMutationOptions = Apollo.BaseMutationOptions<SwitchlocationMutation, SwitchlocationMutationVariables>;
export const AddDelegatedUserMutationDocument = gql`
    mutation AddDelegatedUserMutation($addDelegatedUserInput: [DelegatedUserInput]!) {
  AddDelegatedUser(input: $addDelegatedUserInput)
}
    `;
export type AddDelegatedUserMutationMutationFn = Apollo.MutationFunction<AddDelegatedUserMutationMutation, AddDelegatedUserMutationMutationVariables>;

/**
 * __useAddDelegatedUserMutationMutation__
 *
 * To run a mutation, you first call `useAddDelegatedUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDelegatedUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDelegatedUserMutationMutation, { data, loading, error }] = useAddDelegatedUserMutationMutation({
 *   variables: {
 *      addDelegatedUserInput: // value for 'addDelegatedUserInput'
 *   },
 * });
 */
export function useAddDelegatedUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddDelegatedUserMutationMutation, AddDelegatedUserMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDelegatedUserMutationMutation, AddDelegatedUserMutationMutationVariables>(AddDelegatedUserMutationDocument, options);
      }
export type AddDelegatedUserMutationMutationHookResult = ReturnType<typeof useAddDelegatedUserMutationMutation>;
export type AddDelegatedUserMutationMutationResult = Apollo.MutationResult<AddDelegatedUserMutationMutation>;
export type AddDelegatedUserMutationMutationOptions = Apollo.BaseMutationOptions<AddDelegatedUserMutationMutation, AddDelegatedUserMutationMutationVariables>;
export const RemoveDelegatedUserMutationDocument = gql`
    mutation RemoveDelegatedUserMutation($deleteDelegatedUserIds: [Int]) {
  DeleteDelegatedUser(ids: $deleteDelegatedUserIds)
}
    `;
export type RemoveDelegatedUserMutationMutationFn = Apollo.MutationFunction<RemoveDelegatedUserMutationMutation, RemoveDelegatedUserMutationMutationVariables>;

/**
 * __useRemoveDelegatedUserMutationMutation__
 *
 * To run a mutation, you first call `useRemoveDelegatedUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDelegatedUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDelegatedUserMutationMutation, { data, loading, error }] = useRemoveDelegatedUserMutationMutation({
 *   variables: {
 *      deleteDelegatedUserIds: // value for 'deleteDelegatedUserIds'
 *   },
 * });
 */
export function useRemoveDelegatedUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<RemoveDelegatedUserMutationMutation, RemoveDelegatedUserMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveDelegatedUserMutationMutation, RemoveDelegatedUserMutationMutationVariables>(RemoveDelegatedUserMutationDocument, options);
      }
export type RemoveDelegatedUserMutationMutationHookResult = ReturnType<typeof useRemoveDelegatedUserMutationMutation>;
export type RemoveDelegatedUserMutationMutationResult = Apollo.MutationResult<RemoveDelegatedUserMutationMutation>;
export type RemoveDelegatedUserMutationMutationOptions = Apollo.BaseMutationOptions<RemoveDelegatedUserMutationMutation, RemoveDelegatedUserMutationMutationVariables>;
export const UploadImageMutationDocument = gql`
    mutation uploadImageMutation($singleUploadInput: UploadFileInput!) {
  LocationUserProfilePictureUpload(input: $singleUploadInput) {
    filename
  }
}
    `;
export type UploadImageMutationMutationFn = Apollo.MutationFunction<UploadImageMutationMutation, UploadImageMutationMutationVariables>;

/**
 * __useUploadImageMutationMutation__
 *
 * To run a mutation, you first call `useUploadImageMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutationMutation, { data, loading, error }] = useUploadImageMutationMutation({
 *   variables: {
 *      singleUploadInput: // value for 'singleUploadInput'
 *   },
 * });
 */
export function useUploadImageMutationMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageMutationMutation, UploadImageMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadImageMutationMutation, UploadImageMutationMutationVariables>(UploadImageMutationDocument, options);
      }
export type UploadImageMutationMutationHookResult = ReturnType<typeof useUploadImageMutationMutation>;
export type UploadImageMutationMutationResult = Apollo.MutationResult<UploadImageMutationMutation>;
export type UploadImageMutationMutationOptions = Apollo.BaseMutationOptions<UploadImageMutationMutation, UploadImageMutationMutationVariables>;
export const RemoveProfilePictureMutationDocument = gql`
    mutation RemoveProfilePictureMutation($removeLocationUserProfilePictureLocationUserId: Int!) {
  RemoveLocationUserProfilePicture(
    locationUserId: $removeLocationUserProfilePictureLocationUserId
  )
}
    `;
export type RemoveProfilePictureMutationMutationFn = Apollo.MutationFunction<RemoveProfilePictureMutationMutation, RemoveProfilePictureMutationMutationVariables>;

/**
 * __useRemoveProfilePictureMutationMutation__
 *
 * To run a mutation, you first call `useRemoveProfilePictureMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProfilePictureMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProfilePictureMutationMutation, { data, loading, error }] = useRemoveProfilePictureMutationMutation({
 *   variables: {
 *      removeLocationUserProfilePictureLocationUserId: // value for 'removeLocationUserProfilePictureLocationUserId'
 *   },
 * });
 */
export function useRemoveProfilePictureMutationMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProfilePictureMutationMutation, RemoveProfilePictureMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProfilePictureMutationMutation, RemoveProfilePictureMutationMutationVariables>(RemoveProfilePictureMutationDocument, options);
      }
export type RemoveProfilePictureMutationMutationHookResult = ReturnType<typeof useRemoveProfilePictureMutationMutation>;
export type RemoveProfilePictureMutationMutationResult = Apollo.MutationResult<RemoveProfilePictureMutationMutation>;
export type RemoveProfilePictureMutationMutationOptions = Apollo.BaseMutationOptions<RemoveProfilePictureMutationMutation, RemoveProfilePictureMutationMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    