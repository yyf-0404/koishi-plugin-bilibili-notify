export enum LiveType {
	NotLiveBroadcast = 0,
	StartBroadcasting = 1,
	LiveBroadcast = 2,
	StopBroadcast = 3,
	FirstLiveBroadcast = 4,
}

export type ChannelIdArr = Array<{
	channelId: string;
	// dynamic: boolean;
	// live: boolean;
	// liveGuardBuy: boolean;
	// atAll: boolean;
}>;

export type TargetItem = {
	channelIdArr: ChannelIdArr;
	platform: string;
	dynamic: boolean;
	live: boolean;
	liveGuardBuy: boolean;
	atAll: boolean;
	blackListMode: boolean;
};

export type Target = Array<TargetItem>;

export type SubItem = {
	id: number;
	uid: string;
	uname: string;
	roomId: string;
	target: Target;
	platform: string;
	live: boolean;
	dynamic: boolean;
	card: {
		enable: boolean;
		cardColorStart: string;
		cardColorEnd: string;
		cardBasePlateColor: string;
		cardBasePlateBorder: string;
	};
};

export type SubManager = Array<SubItem>;

export type MasterInfo = {
	username: string;
	userface: string;
	roomId: number;
	liveOpenFollowerNum: number;
	liveEndFollowerNum: number;
	liveFollowerChange: number;
};

export type LiveUsersItem = {
	face: string;
	is_reserve_recall: boolean;
	jump_url: string;
	mid: number;
	room_id: number;
	title: string;
	uname: string;
};

export type LiveUsers = {
	count: number;
	group: string;
	items: Array<LiveUsersItem>;
};

export type AllDynamicInfo = {
	code: number;
	message: string;
	data: {
		has_more: boolean;
		items: [{
			id_str: string;
			type: string;
			modules: {
				module_author: {
					mid: number;
					name: string;
					face: string;
				},
				module_dynamic: {
					major: {
						draw: {
							items: Array<{
								src: string;
								alt: string;
							}>;
						}
					}
				};
			}
		}];
		offset: string;
		update_baseline: string;
		update_num: number;
	};
};
