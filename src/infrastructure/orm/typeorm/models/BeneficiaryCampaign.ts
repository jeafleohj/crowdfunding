import { StatusBeneficiaryCampaign } from 'domain/entity/BeneficiaryCampaign'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { BeneficiaryEntity } from './Beneficiary'
import { CampaignEntity } from './Campaign'

@Entity('beneficiary_campaign')
@Unique('UNQ_KEYS', ['beneficiaryId', 'campaignId'])
export class BeneficiaryCampaignEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'enum',
    enum: StatusBeneficiaryCampaign
  })
  status: StatusBeneficiaryCampaign

  @Column({
    nullable: true
  })
  priority: number

  @Column()
  beneficiaryId: number

  @Column()
  campaignId: number

  @ManyToOne(
    () => BeneficiaryEntity,
    beneficiary => beneficiary.beneficiaryCampaign)
  beneficiary: BeneficiaryEntity

  @ManyToOne(() => CampaignEntity, campaign => campaign.beneficiaryCampaign)
  campaign: CampaignEntity
}
