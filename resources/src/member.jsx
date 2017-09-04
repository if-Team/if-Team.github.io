var Member = React.createClass({
    propTypes: {
        naver: React.PropTypes.string.isRequired,
        naverId: React.PropTypes.string.isRequired,

        github: React.PropTypes.string,
        githubId: React.PropTypes.string,

        grade: React.PropTypes.string
    },

    render: function(){
        return <div className="member chip">
            <img src={this.props.githubId ? `https://avatars2.githubusercontent.com/u/${this.props.githubId}?v=3&s=50` : `resources/img/mk_icon.png`} />
            <span className="member title tooltipped" data-position="bottom" data-delay="50" data-tooltip={this.props.naverId}>{this.props.naver}</span>
            <span className="member github"><a href={'https://github.com/' + this.props.github}>{this.props.github && ('@' + this.props.github)}</a></span>
            <span className="member grade light-blue-text text-darken-3">{this.props.grade}</span>
        </div>;
    }
});

var MemberList = React.createClass({
    render: function(){
        return <ul className="members">
            <Member grade="Leader" github="onebone"       githubId="3233503"   naver="원본"            naverId="jyc0410"     />
            <Member grade="Staff"  github="ChalkPE"       githubId="9481405"   naver="ChalkPE"         naverId="amato17"     />
            <Member grade="Staff"  github="SemteulGaram"  githubId="6727533"   naver="SemteulGaram"    naverId="b_science"   />
            <Member grade="Staff"  github="BloodType-AB"  githubId="11348711"  naver="멸종위기의 AB형" naverId="ehddnjs9719" />
            <Member grade="Staff"  github="Hanarin"       githubId="6566972"   naver="하나린"          naverId="canghaun"    />
            <Member grade=""       github="a1p4ca"        githubId="13712304"  naver="물외한인"        naverId="110EIm"      />
            <Member grade=""       github="angello10"     githubId="9531062"   naver="Dark"            naverId="angello10"   />
            <Member grade=""       github="BetaF1sh"      githubId="5278201"   naver="BetaFish"        naverId="yale2a1"     />
            <Member grade=""       github="cr0sh"         githubId="13118114"  naver="Cr0sh"           naverId="ska827"      />
            <Member grade=""       github="Flaplim"       githubId="6704921"   naver="Flaplim"         naverId="gptj1224"    />
            <Member grade=""       github="HailCryptic"   githubId="19639378"  naver="cryptic"         naverId="sct2001"     />
            <Member grade=""       github="HelloWorld017" githubId="3919433"   naver="Khinenw"         naverId="deu07115"    />
            <Member grade=""       github="Khoneki"       githubId="9482404"   naver="Khoneki"         naverId="woni8708"    />
            <Member grade=""       github="lwhgit"        githubId="10684388"  naver="Circle"          naverId="lwh8762"     />
            <Member grade=""       github="milk0417"      githubId="9590938"   naver="SW승원"          naverId="nno88551"    />
            <Member grade=""       github="PresentKim"    githubId="13284800"  naver="PresentKim"      naverId="hustlerhlk"  />
        </ul>;
    }
});

ReactDOM.render(
    <MemberList />,
    document.getElementById('members-view')
);
