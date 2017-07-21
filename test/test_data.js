'use strict';

module.exports = {
    collection: [
		{ id: 1, name: 'Apple', type: 'fruit' },
		{ id: 2, name: 'Banana', type: 'fruit' },
		{ id: 3, name: 'Blackberry', type: 'fruit' },
		{ id: 4, name: 'Guava', type: 'fruit' },
		{ id: 5, name: 'Mango', type: 'fruit' },
		{ id: 6, name: 'Orange', type: 'fruit' },
		{ id: 7, name: 'Papaya', type: 'fruit' },
		{ id: 8, name: 'Salal Berry', type: 'fruit' },
		{ id: 9, name: 'Strawberry', type: 'fruit' },
		{ id: 10, name: 'Watermelon', type: 'fruit' },
		
		{ id: 11, name: 'British ale', type: 'beer' },
		{ id: 12, name: 'German lager', type: 'beer' },
		{ id: 13, name: 'Irish ale', type: 'beer' },
		{ id: 14, name: 'North American ale', type: 'beer' },
		{ id: 15, name: 'North American lager', type: 'beer' },

		{ id: 16, name: 'Abbaye de Tamié', type: 'curd' },
		{ id: 17, name: 'Brânză', type: 'curd' },
		{ id: 18, name: 'Algunder Butterkäse', type: 'curd' },
		{ id: 19, name: 'Añejo cheese', type: 'curd' },
		{ id: 20, name: 'Arīsh', type: 'curd' },
		{ id: 21, name: 'Bagòs', type: 'curd' },
		{ id: 22, name: 'Bałtycki', type: 'curd' },
		{ id: 23, name: 'Boscatella di Fiavè', type: 'curd' },
		{ id: 24, name: 'Bovški sir', type: 'curd' },
		{ id: 25, name: 'Brânzǎ de burduf', type: 'curd' }
	],
    queries: [
		{
			keyword: 'av',
			config: {},
			expected_result_objects: [
				{ id: 4, name: 'Guava', type: 'fruit' },
				{ id: 23, name: 'Boscatella di Fiavè', type: 'curd' }
			]
		},
		{
			keyword: 'go',
			config: { case_sensitive: false },
			expected_result_objects: [
				{ id: 5, name: 'Mango', type: 'fruit' },
  				{ id: 21, name: 'Bagòs', type: 'curd' }
			]
		},
		{
			keyword: 'go',
			config: { replace_umlauts: false },
			expected_result_objects: [
				{ id: 5, name: 'Mango', type: 'fruit' }
			]
		},
		{
			keyword: 'an',
			config: {},
			expected_result_objects: [
				{ id: 2, name: 'Banana', type: 'fruit' },
				{ id: 5, name: 'Mango', type: 'fruit' },
				{ id: 6, name: 'Orange', type: 'fruit' },
				{ id: 12, name: 'German lager', type: 'beer' },
				{ id: 14, name: 'North American ale', type: 'beer' },
				{ id: 15, name: 'North American lager', type: 'beer' },
				{ id: 17, name: 'Brânză', type: 'curd' },
				{ id: 19, name: 'Añejo cheese', type: 'curd' },
				{ id: 25, name: 'Brânzǎ de burduf', type: 'curd' }
			]
		},
		{
			keyword: 'an',
			config: { replace_umlauts: false },
			expected_result_objects: [
				{ id: 2, name: 'Banana', type: 'fruit' },
				{ id: 5, name: 'Mango', type: 'fruit' },
				{ id: 6, name: 'Orange', type: 'fruit' },
				{ id: 12, name: 'German lager', type: 'beer' },
				{ id: 14, name: 'North American ale', type: 'beer' },
				{ id: 15, name: 'North American lager', type: 'beer' }
			]
		},
		{
			keyword: 'ân',
			config: { replace_umlauts: false },
			expected_result_objects: [
				{ id: 17, name: 'Brânză', type: 'curd' },
				{ id: 25, name: 'Brânzǎ de burduf', type: 'curd' }
			]
		},
		{
			keyword: 'īs',
			config: {},
			expected_result_objects: [
				{ id: 11, name: 'British ale', type: 'beer' },
				{ id: 13, name: 'Irish ale', type: 'beer' },
				{ id: 20, name: 'Arīsh', type: 'curd' }
			]
		},
		{
			keyword: 'īs',
			config: { replace_umlauts: false },
			expected_result_objects: [
				{ id: 20, name: 'Arīsh', type: 'curd' }
			]
		},
		{
			keyword: 'Am',
			config: { case_sensitive: false },
			expected_result_objects: [
				{ id: 14, name: 'North American ale', type: 'beer' },
				{ id: 15, name: 'North American lager', type: 'beer' },
				{ id: 16, name: 'Abbaye de Tamié', type: 'curd' }
			]
		},
		{
			keyword: 'Am',
			config: { case_sensitive: true },
			expected_result_objects: [
				{ id: 14, name: 'North American ale', type: 'beer' },
				{ id: 15, name: 'North American lager', type: 'beer' }
			]
		}
	]
};