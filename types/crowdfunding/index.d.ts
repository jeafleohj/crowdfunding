import {
  IBeneficiaryRepository,
  ICampaignRepository,
  ICampaingEventRepository,
  IDonationRepository,
  IGiverDonationRepository,
  IGiverRepository,
  ITokenBlacklistingRepository,
  IUbigeoRepository,
  IUserRepository,
  IVolunteerRepository,
} from 'domain/repository'

declare global {
  declare interface MyRepository {
    beneficiaryRepository: IBeneficiaryRepository
    campaignEventRepository: ICampaingEventRepository
    campaignRepository: ICampaignRepository
    donationRepository: IDonationRepository
    giverDonationRepository: IGiverDonationRepository
    giverRepository: IGiverRepository
    tokenBlacklistingRepository: ITokenBlacklistingRepository
    ubigeoRepository: IUbigeoRepository
    userRepository: IUserRepository
    volunteerRepository: IVolunteerRepository
    mailing: Function
  }
}
