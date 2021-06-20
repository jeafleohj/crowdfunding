export function RemoveVolunteer(volunteerId: number,
  { volunteerRepository }: MyRepository)
  : Promise<any> {
  return volunteerRepository.remove(volunteerId)
}

