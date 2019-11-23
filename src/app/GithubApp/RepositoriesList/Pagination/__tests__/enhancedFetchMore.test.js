import * as utils from '../utils'

describe('enhancedFetchMore', () => {
    it('Check call', () => {
        const resultCall = utils.enhancedFetchMore({
            fetchMore: () => () => {},
            cursorAfter: "",
            cursorBefore: "",
            limit: 1,
            queryString: "",
        });


        expect(typeof resultCall).toBe("function");
    });
});
