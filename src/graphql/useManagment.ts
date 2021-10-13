import { gql } from "@apollo/client";

gql`
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

  mutation saveNotificationEmail(
    $updateLocationUserId: Int!
    $updateLocationUserInput: UpdateLocationUserInput!
  ) {
    UpdateLocationUser(
      id: $updateLocationUserId
      input: $updateLocationUserInput
    ) {
      isPendingAuth
      notificationEmail
    }
  }

  mutation saveProfileDetails(
    $updateLocationUserId: Int!
    $updateLocationUserInput: UpdateLocationUserInput!
    $updateLocationUserLocationUserPhones: [LocationUserPhoneInput!]!
  ) {
    UpdateLocationUser(
      id: $updateLocationUserId
      input: $updateLocationUserInput
      locationUserPhones: $updateLocationUserLocationUserPhones
    ) {
      isPendingAuth
      notificationEmail
    }
  }

  mutation switchlocation(
    $updateLocationUserId: Int!
    $updateLocationUserInput: UpdateLocationUserInput!
  ) {
    UpdateLocationUser(
      id: $updateLocationUserId
      input: $updateLocationUserInput
    ) {
      id
    }
  }

  mutation AddDelegatedUserMutation(
    $addDelegatedUserInput: [DelegatedUserInput]!
  ) {
    AddDelegatedUser(input: $addDelegatedUserInput)
  }

  mutation RemoveDelegatedUserMutation($deleteDelegatedUserIds: [Int]) {
    DeleteDelegatedUser(ids: $deleteDelegatedUserIds)
  }

  mutation uploadImageMutation($singleUploadInput: UploadFileInput!) {
    LocationUserProfilePictureUpload(input: $singleUploadInput) {
      filename
    }
  }

  mutation RemoveProfilePictureMutation(
    $removeLocationUserProfilePictureLocationUserId: Int!
  ) {
    RemoveLocationUserProfilePicture(
      locationUserId: $removeLocationUserProfilePictureLocationUserId
    )
  }
`;
