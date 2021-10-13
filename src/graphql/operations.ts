import { gql } from "@apollo/client";

gql`
  query Users {
    Users {
      id
      username
      name
      email
    }
  }

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

  mutation AddUser($input: UserInput!) {
    AddUser(input: $input) {
      id
      username
      email
    }
  }

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

  mutation Mutation($forgetPasswordInput: ForgetInput!) {
    ForgetPassword(input: $forgetPasswordInput) {
      id
      userId
      email
      otp
    }
  }

  mutation ResetMutation($updatePasswordInput: UpdateReset!) {
    UpdatePassword(input: $updatePasswordInput) {
      id
      username
      name
      email
    }
  }

  mutation OtpVerifyMutation($otpVerifyInput: OtpInput) {
    OtpVerify(input: $otpVerifyInput) {
      id
      userId
      email
    }
  }

  query GetClientLocationByLocationId(
    $getClientLocationByLocationIdLocationId: Int!
    $getClientLocationByLocationIdClientFilter: String!
    $getClientLocationByLocationIdActiveFilterType: ActiveFilterType!
  ) {
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

  mutation UpdateClient(
    $updateClientId: Int!
    $updateClientInput: UpdateClientInput!
    $updateClientClientPhones: [ClientPhoneInput!]!
    $updateClientClientAddress: [ClientAddressInput!]!
  ) {
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

  mutation UpdateUser(
    $updateUserId: Int!
    $updateUserInput: UpdateUserInput!
    $updateUserUserPhones: [UserPhoneInput!]!
  ) {
    UpdateUser(
      id: $updateUserId
      input: $updateUserInput
      userPhones: $updateUserUserPhones
    ) {
      name
    }
  }
`;
